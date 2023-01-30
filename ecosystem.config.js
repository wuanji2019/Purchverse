module.exports = {
  apps: [
    {
      name: 'Purchverse',
      script: 'web/index.js',
      cwd: "web/",
      watch: true,
      ignore_watch: [
        "node_modules",
        "logs"
      ],
      error_file: "./logs/app-err.log",
      out_file: "./logs/app-out.log",
      env: {
        NODE_ENV: "production",
        BACKEND_PORT: 8082,
        PORT: 3000,
        HOST: 'https://gate.purchverse.com',
        SHOPIFY_API_KEY: 'c66a4eb1ead92e91c4bc1014fd586a99',
        SHOPIFY_API_SECRET: '7b2cb58ec008adf866d7e6daa1b9abed',
        SCOPES: 'write_products'
      },
      env_production: {
        NODE_ENV: "production",
        BACKEND_PORT: 8082,
        PORT: 3000,
        HOST: 'https://gate.purchverse.com',
        SHOPIFY_API_KEY: 'c66a4eb1ead92e91c4bc1014fd586a99',
        SHOPIFY_API_SECRET: '7b2cb58ec008adf866d7e6daa1b9abed',
        SCOPES: 'write_products'
      }
    }
  ],
};
