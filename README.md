# global-offset [![Build Status][travis-image]][travis-url]

  > Element global offset

  Calculate offset of element with any `position` property

## Install

```sh
npm install --save global-offset
```

## Usage

```js
var offset = require('global-offset');
var el = document.querySelector('.hello');

offset(el); // {left: 150, top: 0}
```

## License

  MIT

[travis-url]: https://travis-ci.org/andrepolischuk/global-offset
[travis-image]: https://travis-ci.org/andrepolischuk/global-offset.svg?branch=master
