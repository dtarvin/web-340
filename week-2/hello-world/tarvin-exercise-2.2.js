/*
============================================
; Title:  tarvin-exercise-2.2.js
; Author: David Tarvin
; Date:   28 February 2019
; Description: Hello World
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 6.4"));
console.log("");

var express = require("express");
var http = require("http");

var app = express();

app.use(function(request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello World");
});

http.createServer(app).listen(8080);
