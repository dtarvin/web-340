/*
============================================
; Title:  tarvin-assignment-4.4.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:    17 March 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 4.4"));
console.log("");

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
