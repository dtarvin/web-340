/*
============================================
; Title:  tarvin-exercise-5.3.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   21 March 2019
; Description: Pug Template
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 5.3"));
console.log("");

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {
  response.render("index", {
    message: "Learning Pug is...awesome???"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
