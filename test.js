import test from 'ava';
import offset from './index.es5';

const parent = {
  offsetLeft: 50,
  offsetTop: 50,
  offsetWidth: 100,
  offsetHeight: 100,
  offsetParent: null
};

const children = {
  offsetLeft: -25,
  offsetTop: -25,
  offsetWidth: 100,
  offsetHeight: 100,
  offsetParent: parent
};

test(t => {
  t.is(offset(parent).left, 50);
  t.is(offset(parent).top, 50);
  t.is(offset(children).left, 25);
  t.is(offset(children).top, 25);
});
