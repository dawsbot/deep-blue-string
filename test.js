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
  // TODO: test String.prototype.search
});

test('#stringFunctions', t => {
  t.is(dbs('UNIcorns', String.prototype.toLowerCase), 'unicorns');
  t.is(dbs('unicorns', String.prototype.replace, ['uni', '']), 'corns');
  t.is(dbs('uNICorns', String.prototype.toLowerCase), 'unicorns');
  t.is(dbs('uni', String.prototype.repeat, [3]), 'uniuniuni');
});

test('#basicArrayFunctions', t => {
  t.same(dbs(['UNIcorns'], String.prototype.toLowerCase), ['unicorns']);
  t.same(dbs(['unicorns'], String.prototype.replace, ['uni', '']), ['corns']);
  t.same(dbs(['uNICorns'], String.prototype.toLowerCase), ['unicorns']);
});

test('#complexArrayFunctions', t => {
  t.same(dbs([['UNIcorns']], String.prototype.toLowerCase), [['unicorns']]);
  t.same(dbs([[['unicorns'], ['unicycle']]], String.prototype.replace, ['uni', '']), [[['corns'], ['cycle']]]);
});

test('#basicObjectFunctions', t => {
  t.same(dbs({unicorns: 'unicycle'}, String.prototype.replace, ['uni', '']), {corns: 'cycle'});
  t.same(dbs({unicorns: 'unicycle'}, String.prototype.toUpperCase), {UNICORNS: 'UNICYCLE'});
  t.same(dbs({unicorns: 'unicycle', unit: 'university'}, String.prototype.replace, ['uni', '']), {corns: 'cycle', t: 'versity'});
});

test('#complexMixedDatatypeFunctions', t => {
  t.same(dbs([{unicorns: 'unicycle'}], String.prototype.replace, ['uni', '']), [{corns: 'cycle'}]);
  t.same(dbs(['hackcu', {unicorns: 'unicycle'}, 'test'], String.prototype.toUpperCase), ['HACKCU', {UNICORNS: 'UNICYCLE'}, 'TEST']);
});
