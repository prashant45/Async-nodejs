'use strict'

const temp = require('./asyncFileCall');

let filename = './dummy.txt';
console.log('Before reading Asyncronously');

const getData = temp.getPromiseASync(filename);

getData.then((data) => {
  console.log(data); // Success!
}, reason => {
  console.log(reason); // Error!
});

console.log('After reading Asyncronously');
