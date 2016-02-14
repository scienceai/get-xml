
exports.parseString = function (str) {
  if ('DOMParser' in window) return new DOMParser().parseFromString(str);
  if ('ActiveXObject' in window) {
    var doc = new ActiveXObject('Microsoft.XMLDOM');
    xmlDoc.async = 'false';
    xmlDoc.loadXML(str);
    return doc;
  }
  throw new Error('Cannot parse XML');
};
