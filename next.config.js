/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    // Prefer loading of ES Modules over CommonJS
    //experimental: { esmExternals: true }
    experimental:{esmExternals: 'loose'}
  }

//module.exports = nextConfig;
