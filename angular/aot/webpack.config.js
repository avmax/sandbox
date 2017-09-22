switch (process.env.NODE_ENV) {
case 'prod':
case 'production':
  module.exports = require('./configs/webpack/webpack.prod.js');
  break;
case 'dev':
case 'development':
default:
  module.exports = require('./configs/webpack/webpack.dev.js');
}
