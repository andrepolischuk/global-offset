export default function globalOffset(el) {
  const { top, left } = el.getBoundingClientRect();
  const { pageYOffset, pageYOffset } = window;

  return {
    top: top + pageYOffset,
    left: left + pageXOffset
  };
};
