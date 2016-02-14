
var DOMParser = require('xmldom').DOMParser;

exports.parseString = function (str) {
  return new DOMParser().parseFromString(str);
};
