/*
============================================
; Title:  app.js (Assignment 6.4)
; Author: David Tarvin
; Date:   02 April 2019
; Description: Employee Management System
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 6.4 - EMS"));
console.log("");

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var Employee = require('./models/employee');

var mongoDB = "mongodb+srv://bellevue_student:david1234@cluster0-xzug0.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to MongoDB Atlas instance");
});

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");

app.use(logger("short"));

var employee = new Employee({
  firstName: "David",
  lastName: "Tarvin"
})

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
