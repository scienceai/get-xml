(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

exports.parseString = function (str) {
  if ('DOMParser' in window) return new DOMParser().parseFromString(str, 'application/xml');
  if ('ActiveXObject' in window) {
    var doc = new ActiveXObject('Microsoft.XMLDOM');
    xmlDoc.async = 'false';
    xmlDoc.loadXML(str);
    return doc;
  }
  throw new Error('Cannot parse XML');
};

},{}],2:[function(require,module,exports){

var parseString = require('..').parseString;
var pre = document.getElementById('log');

function assert (cond, str) {
  pre.textContent += (cond ? 'OK' : 'FAILED') + ': ' + str + '\n';
}

var doc = parseString('<foo/>');
assert(doc, 'there is a Document');
assert('documentElement' in doc, 'duck types with documentElement');
assert(doc.documentElement.localName === 'foo', 'root element is foo');

},{"..":1}]},{},[2]);
