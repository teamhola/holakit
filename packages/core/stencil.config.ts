import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postcssPresetEnv from 'postcss-preset-env'

declare module '@stencil/postcss' {
  function postcss (_: any)
}

export const config: Config = {
  namespace: 'HolakitCore',
  plugins: [
    postcss({
      plugins: [postcssPresetEnv({
        stage: 0
      })]
    })
  ],
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
