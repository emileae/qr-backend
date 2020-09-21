module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: "/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}",
        database: "${process.env.DATABASE_NAME}",
        username: "${process.env.DATABASE_USERNAME}",
        password: "${process.env.DATABASE_PASSWORD}",
        // port: env.int('DATABASE_PORT', 5432),
        // ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'postgres',
//         host: env('DATABASE_HOST', '127.0.0.1'),
//         port: env.int('DATABASE_PORT', 5432),
//         database: env('DATABASE_NAME', 'postgres'),
//         username: env('DATABASE_USERNAME', 'postgres'),
//         password: env('DATABASE_PASSWORD', 'mysupersecretpassword'),
//         ssl: env.bool('DATABASE_SSL', false),
//       },
//       options: {}
//     },
//   },
// });

/*
instanceId: qr-postgres
pw: 4Ozb8BKpGkLOeD14

*/
