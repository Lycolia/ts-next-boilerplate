const isProd = process.env.NODE_ENV === 'production';

module.exports = (phase, { defaultConfig }) => {
  return {
    basePath: isProd ? '/deploy-path-here' : '',
    assetPrefix: isProd ? '/assets-path-here' : '',
    pageExtensions: ['page.tsx'],
  };
};
