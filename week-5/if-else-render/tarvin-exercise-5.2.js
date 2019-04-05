/*
============================================
; Title:  tarvin-exercise-5.2.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   21 March 2019
; Description: If Else Render
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 5.2"));
console.log("");

var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var n = [
  "Harry",
  "Sally",
  "Jenny",
  "Forrest"
];

app.get("/", function(request, response) {
  response.render("index", {
    names:n
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
})
