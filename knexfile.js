const sharedConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations', 
      // we tell knex where we want our migration files to exist
    },
    seeds: {
      directory: './data/seeds',
       // we tell knex where we our seed data is
    },
    // this enables foreign keys in SQLite
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  }
  
  // different configs for different dbs
  module.exports = {
    development: {
      ...sharedConfig,
      connection: { filename: './data/schemes.db3' },
    },
    testing: {
      ...sharedConfig,
      connection: { filename: './data/testing.db3' },
    },
  }
  