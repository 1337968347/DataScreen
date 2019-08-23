import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    sass()
  ],
  outputTargets: [{ 
    type: 'www',
    serviceWorker: null
  }],
  globalStyle: 'src/global/app.css'
};
