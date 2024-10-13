/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost'], // Ajoutez ici tous les domaines d'où vous chargez des images
  },
};

module.exports = nextConfig;
