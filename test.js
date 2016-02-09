import test from 'ava';
import dbs from './';

test('#invalidTarget', t => {
  t.throws(() => {
    dbs(false, 'HackCU');
  });
  t.throws(() => {
    dbs(null, 'HackCU');
  });
  t.throws(() => {
    dbs(undefined, 'HackCU');
  });
  t.throws(() => {
    dbs(123, 'HackCU');
  });
  t.throws(() => {
    dbs({}, 'HackCU');
  });
  t.throws(() => {
    dbs('', 'HackCU');
  });
});

// test('#emptyPattern', t => {
//   t.is(dbs(returnFunc, 'unicorns'), 'unicorns');
//   t.same(dbs(returnFunc, ['unicorns', 'HackCU']), ['unicorns', 'HackCU']);
// });
//
// test('#invalidTarget', t => {
//   t.is(dbs(returnFunc, false), false);
//   t.is(dbs(returnFunc, null), null);
//   t.is(dbs(returnFunc, undefined), undefined);
//   t.is(dbs(returnFunc, 123), 123);
// });

test('#stringFunctions', t => {
  t.is(dbs('UNIcorns', String.prototype.toLowerCase), 'unicorns');
  t.is(dbs('unicorns', String.prototype.replace, ['uni', '']), 'corns');
  t.is(dbs('uNICorns', String.prototype.toLowerCase), 'unicorns');
});

test('#basicArrayFunctions', t => {
  t.same(dbs(['UNIcorns'], String.prototype.toLowerCase), ['unicorns']);
  t.same(dbs(['unicorns'], String.prototype.replace, ['uni', '']), ['corns']);
  t.same(dbs(['uNICorns'], String.prototype.toLowerCase), ['unicorns']);
});

test('#basicArrayFunctions', t => {
  t.same(dbs([['UNIcorns']], String.prototype.toLowerCase), [['unicorns']]);
  t.same(dbs([[['unicorns'], ['unicycle']]], String.prototype.replace, ['uni', '']), [[['corns'], ['cycle']]]);
});

// test('#basicObjectRemove', t => {
//   t.same(dbs('uni', {unicorns: 'unicorns'}), {corns: 'corns'});
// });
