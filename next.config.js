const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove or correct 'eslinnt' to 'eslint' if you need it
  images: {
    domains: ['dev-to-uploads.s3.amazonaws.com', 'res.cloudinary.com']
  }
}

module.exports = nextConfig
