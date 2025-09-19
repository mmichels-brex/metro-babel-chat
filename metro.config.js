/**
 * Metro configuration for brex-chat
 */
const path = require('path');
const { withNativeWind } = require("nativewind/metro");

/** @type {import('metro-config').MetroConfig} */
const config = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'css'],
    unstable_enablePackageExports: true,
  },
  transformer: {
    // This was supposed to unwrap the bundle, but it seems to break the final output
    // unstable_disableModuleWrapping: true,
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = withNativeWind(config, { input: "./global.css" });