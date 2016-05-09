
var http = require('http');

var dog = require('./randomNumb');
var cat= require('./Module2');

function getNumber (){
  return cat(dog (100, 1000000));
}
function makeString (){
  return "Account balance:\n";
}

module.exports.crazy = getNumber;
module.exports.bigMoney= makeString;
