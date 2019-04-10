/*
============================================
; Title:  app.js (EMS)
; Author: David Tarvin
; Date:   02 April 2019
; Description: Employee Management System
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "EMS"));
console.log("");

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
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

// setup csrf protection
var csrfProtection = csrf({cookie: true});

// initialize the express application
var app = express();

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// use statements
app.use(express.static(__dirname + '/public'));
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true;
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

var employee = new Employee({
  firstName: "David",
  lastName: "Tarvin"
})

// routing
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

app.post("/process", function(request, response) {
  console.log(request.body.txtName);
  response.redirect("/");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
