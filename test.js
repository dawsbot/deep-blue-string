/* eslint no-new-object:0 */
import test from 'ava';
import dbs from './';

test('#throws', t => {
  t.throws(() => {
    dbs();
  }, Error, `Expected >= 2 arguments, got ${arguments.length}`);
  t.throws(() => {
    dbs(true);
  }, Error, `Expected >= 2 arguments, got ${arguments.length}`);

  t.throws(() => {
    dbs(false, '');
  }, TypeError, 'Expected typeof arg2 === function, got String');

  t.throws(() => {
    dbs(false, () => {
      return false;
    }, false);
  }, TypeError, `Expected typeof arg3 === Array || String, got boolean`);
});

test('#regexFunctions', t => {
  t.is(dbs('yoo', String.prototype.replace, [/o/g, '']), 'y');
  t.is(dbs('yoo', String.prototype.search, [/o/g]), 1);
});

test('#stringFunctions', t => {
  t.is(dbs('UNIcorns', String.prototype.toLowerCase), 'unicorns');
  t.is(dbs('unicorns', String.prototype.replace, ['uni', '']), 'corns');
  t.is(dbs('uni', String.prototype.repeat, [3]), 'uniuniuni');
  t.is(dbs('yoo', String.prototype.search, /o/g), 1);
  t.is(dbs(new Object('yoo'), String.prototype.search, /o/g), 1);
});

test('#basicArrayFunctions', t => {
  t.same(dbs(['UNIcorns'], String.prototype.toLowerCase), ['unicorns']);
  t.same(dbs(['unicorns'], String.prototype.replace, ['uni', '']), ['corns']);
  t.same(dbs(new Object(['unicorns']), String.prototype.replace, ['uni', '']), new Object(['corns']));
});

test('#complexArrayFunctions', t => {
  t.same(dbs([['UNIcorns']], String.prototype.toLowerCase), [['unicorns']]);
  t.same(dbs([[['unicorns'], ['unicycle']]], String.prototype.replace, ['uni', '']), [[['corns'], ['cycle']]]);
});

test('#basicObjectFunctions', t => {
  t.same(dbs({unicorns: 'unicycle'}, String.prototype.replace, ['uni', '']), {corns: 'cycle'});
  t.same(dbs({unicorns: 'unicycle', unit: 'university'}, String.prototype.replace, ['uni', '']), {corns: 'cycle', t: 'versity'});
});

test('#complexMixedDatatypeFunctions', t => {
  t.same(dbs([{unicorns: 'unicycle'}], String.prototype.replace, ['uni', '']), [{corns: 'cycle'}]);
  t.same(dbs(['hackcu', {unicorns: 'unicycle'}, 'test'], String.prototype.toUpperCase), ['HACKCU', {UNICORNS: 'UNICYCLE'}, 'TEST']);
});

test('#dontModifyTargetNatives', t => {
  // Don't modify native types
  t.same(dbs(123, String.prototype.replace, ['123', '']), 123);
  t.same(dbs(true, String.prototype.replace, ['t', '']), true);
  t.same(dbs(undefined, String.prototype.replace, ['u', '']), undefined);
  t.same(dbs(null, String.prototype.replace, ['u', '']), null);
  const sym = Symbol('test');
  t.same(dbs(sym, String.prototype.replace, ['t', '']), sym);
  const emptyFunc = () => {
    return true;
  };
  t.same(dbs(emptyFunc, String.prototype.replace, ['t', '']), emptyFunc);
});

/*
test('#dontModifyTargetObjects', t => {
  // Don't modify native types
  const date = new Date();
  t.same(dbs(date, String.prototype.toUpperCase), date);
});
*/
