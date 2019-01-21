# XTH

![size-badge](https://img.shields.io/github/size/pldg/xth/xth.min.js.svg)
![downloads-badge](https://img.shields.io/npm/dt/xth.svg)

**Xml-To-Html**

- Load an XML file
- Load its associated XSLT stylesheet
- Transform them to HTML

This tiny script has no dependencies and works in IE10+

## Install

`npm i -S xth`

Or use a CDN like [unpkg](https://unpkg.com/xth/xth.min.js) or [jsdelivr](https://cdn.jsdelivr.net/npm/xth/xth.min.js)

## Example

```js
var xth = require('xth');

var xml = 'path/to/xml';
var xsl = 'path/to/xsl';

xth(xml, xsl, function(html) {
  console.log(html);
});
```

## Test

- Clone repository
- `npm run test`
- Open `http://127.0.0.1:8080/example/`

## API

### `xml`

*Required* <br>
*Type:* `String`

Path to XML file

### `xsl`

*Required* <br>
*Type:* `String`

Path to XSLT file

### `callback`

*Required* <br>
*Type:* `Function`

`callback(html)` takes one argument, the parsed HTML
