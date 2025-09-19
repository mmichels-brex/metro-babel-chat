/**
 * Metro configuration for brex-chat
 */
const path = require('path');

/** @type {import('metro-config').MetroConfig} */
module.exports = {
  projectRoot: path.resolve(__dirname),
  resolver: {
    sourceExts: ['js'],
  },
};