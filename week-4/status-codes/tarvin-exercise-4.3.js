/*
============================================
; Title:  tarvin-exercise-4.3.js
; Author: David Tarvin
; Date:   17 March 2019
; Description: Status Codes
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 4.3"));
console.log("");

var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);
  response.json({
    error: "Resource not found."
  })
});

app.get("/ok", function(request, response) {
  response.status(200);
  response.json({
    message: "Page loaded correctly."
  })
});

app.get("/not-implemented", function(request, response) {
  response.status(501);
  response.json({
    error: "Page not implemented."
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
