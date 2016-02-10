/* guide-for-in:0 */
'use strict';
// const gimey = require('gimey');

const main = function (target, fn, fnArgs) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for arg2, got ${typeof fn}`);
  }

  // target is of type string
  if (typeof target === 'string') {
    return fn.apply(target, fnArgs);
  }

  // target is of type array
  if (Array.isArray(target)) {
    return target.map(elem => {
      return main(elem, fn, fnArgs);
    });
  }

  // target is of type object
  if (typeof target === 'object') {
    const values = Object.keys(target).map(k => {
      return target[k];
    });
    const keys = Object.keys(target);
    // let values = Object.values(target);

    const obj = {};
    keys.forEach((key, i) => {
      obj[main(key, fn, fnArgs)] = main(values[i], fn, fnArgs).toString();
    });
    return obj;
  }

  // Fail silently and return original target if of unsupported data type
  return target;
};

module.exports = main;
