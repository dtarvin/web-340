/*
============================================
; Title:  tarvin-exercise-1.5.js
; Author: David Tarvin
; Date:   22 February 2019
; Description: Hello World
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 1.5"));
console.log("");

var http = require("http");

function processRequest(req, res) {
  var body = "I solemnly swear that I am up to no good.";
  var contentLength = body.length;
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
    
  res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);