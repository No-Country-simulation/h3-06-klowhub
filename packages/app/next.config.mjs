/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (!dev) {
      config.module.rules.push({
        test: /\.stories\.tsx$/, // Coincide con archivos de historias
        loader: 'null-loader',  // Ignora estos archivos
      });
    }
    return config;
  },
};

export default nextConfig;
