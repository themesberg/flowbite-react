module.exports = {
  webpack: (config, env) => {
    if (env === 'production') {
      config.optimization.splitChunks = { chunks: 'all' };
    }

    return config;
  },
};
