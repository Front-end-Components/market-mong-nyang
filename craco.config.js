const CracoAlias = require('craco-alias');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/_variables.scss";
        `,
      },
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        jsConfigPath: 'jsconfig.paths.json',
      },
    },
  ],
};
