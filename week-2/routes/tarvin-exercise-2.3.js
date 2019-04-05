/*
============================================
; Title:  tarvin-exercise-2.3.js
; Author: David Tarvin
; Date:   27 February 2019
; Description: Routes
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 2.3"));
console.log("");

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(8080);
