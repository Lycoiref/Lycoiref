/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
}

export default nextConfig
