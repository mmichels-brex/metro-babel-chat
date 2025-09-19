/**
 * Babel configuration for brex-chat
 */
/** @type {import('@babel/core').ConfigFunction} */
module.exports = (api) => {
  api.cache(false);
  console.log('Calling babel.config.js');

  return {
    presets: [],
    plugins: [],
  };
};