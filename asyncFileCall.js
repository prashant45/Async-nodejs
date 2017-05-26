'use strict'

var fs = require('fs');
var Promise = require('promise');

module.exports.getPromiseASync = function(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, res, body) {
      if (err) {
        return reject(err)
      }
      else {
        resolve(res.toString())
      }
    });
  });
}
