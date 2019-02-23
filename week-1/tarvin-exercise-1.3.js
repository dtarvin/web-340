/*
============================================
; Title:  tarvin-exercise-1.3.js
; Author: David Tarvin
; Date:   22 February 2019
; Description: Modules
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 1.3"));
console.log("");

var url = require("url");

var parsedURL = url.parse("https://www.cnet.com/profile?name=iphone");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);