/** @type {import('next').NextConfig} */
const path = require('path')
module.exports = {
  reactStrictMode:false,
  webpack: config => {
    config.resolve.modules.push(path.resolve('./'))

    return config
  }
}
