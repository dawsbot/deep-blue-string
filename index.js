/* eslint no-extend-native:0, no-use-extend-native/no-use-extend-native:0 */
'use strict';
const partial = require('partial');

const main = function (target, fn, fnArgs) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected a function for arg2, got ${typeof fn}`);
  }

  // target is of type string
  if (typeof target === 'string') {
    // const myPartial = partial.apply(fn, fnArgs);

    String.prototype._fn = fn;
    return target._fn();
    // return target.myPartial();
    // return target._fn.apply(this, fnArgs);
    // const newReplace = partial(fn,'f','#<{(|');
    // let toRet = (fn, target) => {
    //   return target.fn();
    // };
    // return toRet();
  }

  // target is of type array
  if (Array.isArray(target)) {
    return target.map(elem => {
      return main(fn, elem);
    });
  }

  // target is of type object
  if (typeof target === 'object') {
    for (const key in target) {
      // skip loop if the property is from prototype
      if (!target.hasOwnProperty(key)) {
        continue;
      }

      const obj = target[key];
      for (const prop in obj) {
        // skip loop if the property is from prototype
        if (!obj.hasOwnProperty(prop)) {
          continue;
        }

        // your code
        console.log(`${prop} = ${obj[prop]}`);
      }
    }
  }

  // Fail silently and return original target if of unsupported data type
  return target;
};

module.exports = main;
