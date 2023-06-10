/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
           
            hostname: 'cdn.tailgrids.com',
           
          },
        ],
      },
}

module.exports = nextConfig
