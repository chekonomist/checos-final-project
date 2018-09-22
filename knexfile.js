// Update with your config settings.
const devConfig = {
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port: '5432',
    user : 'dba_locales_se',
    password : 'passpass',
    database : 'locales_se'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  seeds: {
    directory: './src/database/seeds'
  }
}


module.exports = {
  development: devConfig,
  production: {}
};
