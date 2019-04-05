/*
============================================
; Title:  tarvin-exercise-4.2.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   17 March 2019
; Description: json-api
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 4.2"));
console.log("");

var express = require("express");
var http = require("http");

var app = express();

app.get("/pokemon/:age", function(request, response) {
  var age = parseInt(request.params.age, 10);
  response.json({
    name: "Pikachu",
    owner: "Ash Ketchum",
    age: age
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
