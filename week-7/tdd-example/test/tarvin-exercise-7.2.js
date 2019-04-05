/*
============================================
; Title:  tarvin-exercise-7.2.js
; Author: David Tarvin
; Date:   04 April 2019
; Description: TDD In Action
;===========================================
*/

// display header at beginning of program
const header = require('../../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 6.4"));
console.log("");var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});

// function getFruits(str) {
//   return str.split(',');
// }

// module.exports = getFruits;
