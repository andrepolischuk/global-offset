
import offset from './index';
import assert from 'assert';

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

describe('globalOffset(el)', () => {
  it('should return global offset', () => {
    assert(offset(parent).left === 50);
    assert(offset(parent).top === 50);
    assert(offset(children).left === 25);
    assert(offset(children).top === 25);
  });
});
