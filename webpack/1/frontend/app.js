'use strict';

const moment = require('moment');

let today = moment(new Date()).locale('ru');

alert(today.format('DD  MM YYYY'));
