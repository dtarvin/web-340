/*
============================================
; Title:  tarvin-fruits.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   05 April 2019
; Description: Mocha and Chai
;===========================================
*/

// display header at beginning of program
const header = require('../../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 7.3"));



function fruits(str) {
  return str.split(',');
}

module.exports = fruits;
