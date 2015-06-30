
/**
 * Expose global offset
 *
 * @param {Element} el
 * @return {Object}
 * @api public
 */

export default (el) => {
  let left = 0;
  let top = 0;

  while(el) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent;
  }

  return {left, top};
};
