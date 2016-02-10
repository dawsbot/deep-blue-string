/* guide-for-in:0 */
const arrify = require('arrify');
// const gimey = require('gimey');

const main = function (target, fn, fnArgs) {
  if (arguments.length < 2) {
    throw new Error(`Expected >= 2 arguments, got ${arguments.length}`);
  }
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected typeof arg2 === function, got ${typeof fn}`);
  }
  if (typeof fnArgs !== 'undefined' && !Array.isArray(fnArgs) && typeof fnArgs !== 'string') {
    throw new TypeError(`Expected typeof arg3 === Array || String, got ${typeof fn}`);
  }

  // Arguments are all valid here
  if (typeof target === 'string') {
    return fn.apply(target, arrify(fnArgs));
  }

  if (Array.isArray(target)) {
    return target.map(elem => {
      return main(elem, fn, fnArgs);
    });
  }

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

  return target;
};

module.exports = main;
