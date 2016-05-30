# global-offset [![Build Status][travis-image]][travis-url]

> Element global offset

Calculate offset of element with any `position` property.

## Install

```sh
npm install --save global-offset
```

## Usage

```js
import offset from 'global-offset';

offset(document.querySelector('.hello')); // {left: 150, top: 0}
```

## API

### offset(element)

Return object with `top` and `left` offsets.

#### element

Type: `element`

Element for calculate offsets.

## Related

* [coordinates][coordinates] — calculate relative coordinates
* [is-pointer-inside][is-pointer-inside] — check if pointer is inside the element
* [is-pointer-near][is-pointer-near] — check if pointer is near the element

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/global-offset
[travis-image]: https://travis-ci.org/andrepolischuk/global-offset.svg?branch=master

[coordinates]: https://github.com/andrepolischuk/coordinates
[is-pointer-inside]: https://github.com/andrepolischuk/is-pointer-inside
[is-pointer-near]: https://github.com/andrepolischuk/is-pointer-near
