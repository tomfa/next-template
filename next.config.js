const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const { findLastCommitSha } = require('./gitBuildId');

// TODO: Change or remove if deploy at root of domain
const PRODUCTION_DOMAIN_ROOT = '/next-template';
const DEVELOPMENT_DOMAIN_ROOT = undefined; // = root of domain

module.exports = (phase) => ({
  images: {
    unoptimized: true, // Required for static export.
  },
  distDir: 'build',
  trailingSlash: true,

  basePath:
    phase === PHASE_DEVELOPMENT_SERVER
      ? DEVELOPMENT_DOMAIN_ROOT
      : PRODUCTION_DOMAIN_ROOT,

  generateBuildId: async () => {
    const commitSha = await findLastCommitSha();
    return commitSha.substr(0, 7);
  },
});
