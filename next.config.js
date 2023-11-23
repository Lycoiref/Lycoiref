/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src/styles'],
  },
}

export default nextConfig
