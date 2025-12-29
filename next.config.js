const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src giscus.app quantumcybersolutions.com *;
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  eslint: {
    dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
  },
  images: {
    // Modern configuration - replaces deprecated "domains"
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.quantumcybersolutions.com',
      },
      {
        protocol: 'https',
        hostname: '**.ericdequevedo.com',
      },
      {
        protocol: 'https',
        hostname: '**.rics-notebook.com',
      },
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.robotric.org',
      },
      {
        protocol: 'https',
        hostname: '**.bev.cool',
      },
      {
        protocol: 'https',
        hostname: '**.leopiolet.com',
      },
      {
        protocol: 'https',
        hostname: '**.cdqcs.com',
      },
      {
        protocol: 'https',
        hostname: 'quantumcybersolutions.com',
      },
      {
        protocol: 'https',
        hostname: 'ericdequevedo.com',
      },
      {
        protocol: 'https',
        hostname: 'rics-notebook.com',
      },
      {
        protocol: 'https',
        hostname: 'robotric.org',
      },
      {
        protocol: 'https',
        hostname: 'bev.cool',
      },
      {
        protocol: 'https',
        hostname: 'leopiolet.com',
      },
      {
        protocol: 'https',
        hostname: 'cdqcs.com',
      },
    ],
   
    // Disable static image optimization for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        'react/jsx-runtime': 'preact/compat/jsx-runtime',
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
  // Speed up builds
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
})