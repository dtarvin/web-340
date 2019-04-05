/*
============================================
; Title:  tarvin-exercise-3.2.js
; Author: David Tarvin
; Date:   10 March 2019
; Description: morgan-logging
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 3.2"));
console.log("");

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")) // Tell Express the views are in the 'views' directory

app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to Exercise 3.2 - Logging!"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
