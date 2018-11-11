import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import postcssPresetEnv from 'postcss-preset-env'

declare module '@stencil/postcss' {
  function postcss (_: any)
}

export const config: Config = {
  namespace: 'mycomponent',
  plugins: [
    postcss([
      postcssPresetEnv()
    ])
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
