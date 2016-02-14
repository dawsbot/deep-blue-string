/* guide-for-in:0 */
const arrify = require('arrify');
const objectTypes = require('object-types');

const main = function (target, fn, fnArgs) {
  const targetType = typeof target;
  const isObj = targetType === 'object';
  const fnType = typeof fn;
  const fnArgsType = typeof fnArgs;

  if (arguments.length < 2) {
    throw new Error(`Expected >= 2 arguments, got ${arguments.length}`);
  }
  if (fnType !== 'function') {
    throw new TypeError(`Expected typeof arg2 === function, got ${fnType}`);
  }
  if (fnArgsType !== 'undefined' && !Array.isArray(fnArgs) && fnArgsType !== 'string' && fnArgsType !== 'object') {
    throw new TypeError(`Expected typeof arg3 === Array || String, got ${fnType}`);
  }

  // Arguments are all valid here
  if (targetType === 'string' || (isObj && objectTypes(target) === 'string')) {
    return fn.apply(target, arrify(fnArgs));
  }

  if (Array.isArray(target) || (isObj && objectTypes(target) === 'array')) {
    return target.map(elem => {
      return main(elem, fn, fnArgs);
    });
  }

  if (targetType === 'object' && objectTypes(target) === 'object') {
    const obj = {};
    const keys = Object.keys(target);
    keys.forEach(key => {
      obj[main(key, fn, fnArgs)] = main(target[key], fn, fnArgs).toString();
    });

    return obj;
  }

  return target;
};

module.exports = main;
