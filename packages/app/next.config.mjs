import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    SESSION_SECRET_KEY: process.env.SESSION_SECRET_KEY,
    BACKEND_URL: process.env.BACKEND_URL,
  },
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
  // @TODO: eliminar la key iamges en produccion
  images: {
    domains: ['miro.medium.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',

        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack(config, { dev }) {
    if (!dev) {
      config.module.rules.push({
        test: /\.stories\.tsx$/, // Coincide con archivos de historias
        loader: 'null-loader', // Ignora estos archivos
      });
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
