
var assert = require('assert');
var parseString = require('.').parseString;

describe('Parsing XML', function () {
  it('should parse some simple XML', () => {
    var doc = parseString('<foo/>');
    assert(doc, 'there is a Document');
    assert('documentElement' in doc, 'duck types with documentElement');
    assert.equal(doc.documentElement.localName, 'foo', 'root element is foo');
  });
  it('should parse some XML asynchronously', (done) => {
    var doc = parseString('<foo/>', (err, doc) => {
      assert.ifError(err);
      assert(doc, 'there is a Document');
      assert('documentElement' in doc, 'duck types with documentElement');
      assert.equal(doc.documentElement.localName, 'foo', 'root element is foo');
      done();
    });
  });
  it('should report errors', (done) => {
    var doc = parseString('<foo>HAHAHAHAAHaaaaaaaa…</bar>', (err, doc) => {
      assert(err, 'there is an Error');
      assert(!doc, 'there is no document');
      done();
    });
  });
});
