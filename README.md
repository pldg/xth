# XTH

![size-badge](https://img.shields.io/github/size/pldg/xth/xth.min.js.svg)
![downloads-badge](https://img.shields.io/npm/dt/xth.svg)

With *xth* (xml to html) you can load an XML file and its associated XSLT stylesheet and transform them to HTML.

No dependencies, weight only 1.3kb.

Works client-side in all major browsers including Internet Explorer 10 and newer versions.

## Install

### CDN

```html
<script src="https://unpkg.com/xth/xth.min.js"></script>
```

### NPM

`npm install --save xth`

## Example

```js
var xml = 'path/to/xml';
var xsl = 'path/to/xsl';

xth(xml, xsl, function(html) {
  console.log(html);
});
```

## Try online

Go to [pldg.github.io/xth](https://pldg.github.io/xth/) (the source code is in gh-pages branch).

## Test locally

1. Execute `npm run test`
2. Open `http://127.0.0.1:8080/test/`

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

`callback(html)` takes the parsed HTML as argument.
