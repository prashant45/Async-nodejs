'use strict'

const temp = require('./asyncFileCall');

let rawData;
let filename = './dummy.txt';
console.log('Before reading Asyncronously');

let getData = temp.getPromiseASync(filename);

getData.then((data) => {
  console.log(data); // Success!
}, reason => {
  console.log(reason); // Error!
});

console.log('After reading Asyncronously');
