const config = require('./src/antD/styles/theme-overrides');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: config,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
