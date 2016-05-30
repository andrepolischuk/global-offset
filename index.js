export default function globalOffset(el) {
  const { top, left } = el.getBoundingClientRect();
  const { pageYOffset, pageXOffset } = window;

  return {
    top: top + pageYOffset,
    left: left + pageXOffset
  };
}
