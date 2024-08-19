const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({ test: /\.html$/, use: 'raw-loader' });
    return config;
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
