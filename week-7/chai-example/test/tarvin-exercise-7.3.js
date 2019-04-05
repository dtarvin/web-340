/*
============================================
; Title:  tarvin-exercise-7.3.js
; Author: David Tarvin
; Date:   05 April 2019
; Description: Mocha and Chai
;===========================================
*/

// display header at beginning of program
const header = require('../../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 7.3"));

var fruits = require("../tarvin-fruits");
var chai = require("chai");

var assert = chai.assert;

describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });
});
