# XTH

![size-badge](https://img.shields.io/github/size/pldg/xth/xth.min.js.svg)
![downloads-badge](https://img.shields.io/npm/dt/xth.svg)

## Xml To Html

Load an XML file and its associated XSLT stylesheet to transform them to HTML. This script has no dependencies and works in IE10.

## Install

`npm install --save xth` or use a cdn [unpkg/xth](https://unpkg.com/xth/xth.min.js).

## Example

```js
var xth = require('xth');

var xml = 'path/to/xml';
var xsl = 'path/to/xsl';

xth(xml, xsl, function(html) {
  console.log(html);
});
```

## Try online

Go to [pldg.github.io/xth](https://pldg.github.io/xth/) for testing. See the source code in [gh-pages branch](/pldg/xth/tree/gh-pages/).

## Test locally

`npm run test` and open `http://127.0.0.1:8080/test/`.

## API

### `xml`

*Required* <br>
*Type:* `String`

Path to XML file.

### `xsl`

*Required* <br>
*Type:* `String`

Path to XSLT file.

### `callback`

*Required* <br>
*Type:* `Function`

`callback(html)` takes one argument, the parsed HTML.
