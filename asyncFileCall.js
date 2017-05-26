'use strict'

const fs = require('fs');
const Promise = require('promise');

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
