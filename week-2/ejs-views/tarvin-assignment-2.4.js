/*
============================================
; Title:  tarvin-assignment-2.4.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   03 March 2019
; Description: ejs-views
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 2.4"));
console.log("");

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine
app.get("/", function(request, response) {

  response.render("index", {
    firstName: "David",
    lastName: "Tarvin",
    city: "Omaha",
    state: "NE",
    zip: "68123",
    address: "123 Rosy Ln"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080.");
});
