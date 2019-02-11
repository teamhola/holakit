const { task, fs, setGlobalOptions } = require('foy')
const glob = require('glob')

if (process.env.NETLIFY_BUILD_BASE) setGlobalOptions({ loading: false })

task('collect', async ctx => {
  const sidebar = {}
  const sidebarCfg = []
  const componentReadmes = glob.sync('../packages/@(core|app)/src/components/*/readme.md')

  componentReadmes.forEach(async path => {
    const scope = path.match(/\/packages\/([a-z]+)\//)[1]
    const name = path.match(/\/([a-z\-]+)\/readme.md/)[1]
    if (!Array.isArray(sidebar[scope])) sidebar[scope] = []
    sidebar[scope].push(name)
    await fs.copy(path, `components/${scope}/${name}.md`)
  })

  Object.keys(sidebar).forEach(scope => {
    const uppercase = str => str.charAt(0).toUpperCase() + str.slice(1)

    const children = []
    sidebar[scope].forEach(name => children.push(`/components/${scope}/${name}`))

    sidebarCfg.push({
      title: uppercase(scope),
      children
    })
  })

  const sidebarCfgStr = JSON.stringify(sidebarCfg, null, 2)
    .replace(/\n/g,'\\n')
    .replace(/"/g, '\\"')
  await ctx.exec(`echo "module.exports = ${sidebarCfgStr}" > componentSidebar.js`)
})

task('build', ['collect'], async ctx => {
  await ctx.exec('yarn vuepress build .')
})
