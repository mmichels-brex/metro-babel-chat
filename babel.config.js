/**
 * Babel configuration for brex-chat
 */
/** @type {import('@babel/core').ConfigFunction} */
module.exports = (api) => {
  api.cache(true);
  console.log('Calling babel.config.js');

  return {
    presets: [
      "@babel/preset-typescript",
      "@babel/preset-flow",
      ["@babel/preset-react", { runtime: 'automatic' }]
    ],
    plugins: ["babel-plugin-syntax-hermes-parser"],
  };
};