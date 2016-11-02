
var DOMParser = require('xmldom').DOMParser;

exports.parseString = function (str, cb) {
  var doc
    , err
  ;
  try {
    var errors = [];
    doc = new DOMParser({ errorHandler: { fatalError: function (f) { errors.push(f); } } })
                .parseFromString(str)
    ;
    if (errors.length) {
      var msg = errors.map(function (str) { return str.replace(/\n@#.*?\]/, ''); }).join('\n  - ');
      err = new Error('Fatal XML parsing error:\n  - ' + msg);
    }
  }
  catch (e) {
    err = new Error('Failed to parse XML: ' + err);
  }
  if (!doc) err = new Error('Parsing XML failed to produce a document');
  if (cb) return process.nextTick(function () { cb(err, err ? null : doc); });
  return err || doc;
};
