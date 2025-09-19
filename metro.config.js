/**
 * Metro configuration for brex-chat
 */
const path = require('path');

/** @type {import('metro-config').MetroConfig} */
module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
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