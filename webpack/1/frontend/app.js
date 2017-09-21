'use strict';

let moduleName = location.pathname.slice(1);

console.log('modulename:', moduleName);

let context = require.context('./routes', false);

try {
    let route = context('./' + moduleName);
} catch(e) {
    alert(e);
}

