import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');


switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    // Production
    break;
  case 'dev':
  case 'development':
  default:
    // Development and test
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}
