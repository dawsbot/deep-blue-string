import test from 'ava';
import dbs from './';

const returnFunc = arg1 => {
  return arg1;
};

test('#invalidPattern', t => {
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

test('#stringRemove', t => {
  t.is(dbs('UNIcorns', String.prototype.toLowerCase), 'unicorns');
  // t.is(dbs('unicorns', String.prototype.replace, ['uni', '']), 'corns');
  // t.is(dbs('a', 'HackCU'), 'HckCU');
});
//
// test('#basicArrayRemove', t => {
//   t.same(dbs('uni', ['unicorns']), ['corns']);
//   t.same(dbs('a', ['HackCU', 'apple']), ['HckCU', 'pple']);
// });
//
// test('#nestedArrayRemove', t => {
//   t.same(dbs('uni', [['unicorns']]), [['corns']]);
//   t.same(dbs('a', [['HackCU'], 'apple']), [['HckCU'], 'pple']);
//   t.same(dbs('a', [['HackCU'], 'apple', 3, null]), [['HckCU'], 'pple', 3, null]);
// });
//
// test('#basicObjectRemove', t => {
//   t.same(dbs('uni', {unicorns: 'unicorns'}), {corns: 'corns'});
// });
