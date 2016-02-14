
var assert = require('assert');
var parseString = require('.').parseString;

describe('Parsing XML', function () {
  it('should parse some simple XML', () => {
    var doc = parseString('<foo/>');
    assert(doc, 'there is a Document');
    assert('documentElement' in doc, 'duck types with documentElement');
    assert.equal(doc.documentElement.localName, 'foo', 'root element is foo');
  });
});
