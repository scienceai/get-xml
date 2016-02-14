
# get-xml

This is a very simple module. Use it whenever you need to parse XML into a DOM, in either Node or
the browser, transparently.

When running in Node, this will use `xmldom` to process the XML. When loaded in a browser there is
no such dependency and the browser's native XML processing will be used. This can lead to
differences in DOM behaviour, but so long as you stick to tried-and-true DOM usage you will be fine.

**NOTE**: This only works with bundlers that respect the `browser` field in `package.json`
(Browserify does, I guess the other big ones do too).

## Installation

    npm install get-xml

## API

```js
import { parseString } from 'get-xml';
let doc = parseString(someXML);
```

Or for those of you who like your JS retro:

```js
var parseString = require('get-dom').parseString;
var doc = parseString(someXML);
```

You can look under `example-browser` to see how this works in the browser, once browserified.
