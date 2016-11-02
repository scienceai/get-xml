
exports.parseString = function (str, cb) {
  let doc
    , err
  ;
  try {
    if ('DOMParser' in window) {
      doc = new DOMParser().parseFromString(str, 'application/xml');
      if (!doc || !doc.documentElement) err = new Error('Parsing produced no document');
      else if (doc.documentElement.localName === 'parsererror') err = doc.documentElement.textContent;
    }
    else if ('ActiveXObject' in window) {
      try {
        doc = new ActiveXObject('Microsoft.XMLDOM');
        xmlDoc.async = 'false';
        if (!xmlDoc.loadXML(str)) {
          err = new Error(
            doc.parseError
              ? doc.parseError.reason
              : 'Unspecified parser error'
          );
          doc = null;
        }
      }
      catch (e) {
        err = new Error('Parsing error: ' + e);
      }
    }
    else err = new Error('No way to parse');
  }
  catch (e) {
    err = new Error('Parsing error: ' + e);
  }
  if (cb) return setTimeout(function () { cb(err, doc); }, 0);
  return err || doc;
};
