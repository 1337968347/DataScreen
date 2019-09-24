import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    sass()
  ],
  outputTargets: [{
    type: 'www',
    serviceWorker: {
      swSrc: 'src/sw.js',
      globPatterns: [
        '**/*.{img,icon,js,css,html}'
      ]
    }
  }],
  enableCache: true,
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts'
};
