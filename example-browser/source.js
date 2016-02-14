
var parseString = require('..').parseString;
var pre = document.getElementById('log');

function assert (cond, str) {
  pre.textContent += (cond ? 'OK' : 'FAILED') + ': ' + str + '\n';
}

var doc = parseString('<foo/>');
assert(doc, 'there is a Document');
assert('documentElement' in doc, 'duck types with documentElement');
assert(doc.documentElement.localName === 'foo', 'root element is foo');
