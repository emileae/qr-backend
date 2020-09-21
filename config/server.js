// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', '24ccd8bf3713ac70c99cd53afd329948'),
//     },
//   },
// });

module.exports = ({env}) => ({
    "host": "${process.env.HOST}",
    "port": "${process.env.PORT || 1337}",
    "production": true,
    "proxy": {
      "enabled": false
    },
    "cron": {
      "enabled": false
    },
    "admin": {
      "autoOpen": false
    }
})
