/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir:true
    },
    images: {
        domains:['flagcdn.com','rickandmortyapi.com']
      },

    reactStrictMode:true,
}

module.exports = nextConfig
