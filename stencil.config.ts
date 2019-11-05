import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// https://stenciljs.com/docs/config

export const config: Config = {
  namespace:"data-screen",
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'docs-readme'
    },
    {
    type: 'www',
    serviceWorker: {
      swSrc: 'src/sw.js',
      globPatterns: [
        '**/*.{img,icon,icon,js,css,html}'
      ]
    }
  }],
  enableCache: true,
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts'
};
