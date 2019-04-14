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
console.log(header.display("David", "Tarvin", "EMS"));
console.log("");

const express = require("express");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const Employee = require('./models/employee');

const mongoDB = "mongodb+srv://bellevue_student:david1234@cluster0-xzug0.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to MongoDB Atlas instance");
});

let csrfProtection = csrf({cookie:true});

let app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(logger("short"));

app.use(helmet.xssFilter());

app.use(cookieParser());

app.use(csrfProtection);

app.use(function(request,response, next) {
  let token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

var employee = new Employee({
  firstName: "David",
  lastName: "Tarvin"
})

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    message: "New Employee Entry Page"
  });
});

app.get("/list", function(request, response) {
  Employee.find({}, function(error, employees) {
    if (error) throw error;

    response.render("list", {
      title: "Employee List",
      employees: employees
    });
  });
});

app.post("/process", function(request, response) {
  // console.log(request.body.txtName);
  if(!request.body.firstName || !request.body.lastName) {
    response.status(400).send("Entries must have a first and last name");
    return;
  }

  const firstName = request.body.firstName;
  const lastName = request.body.lastName;
  const newEmployee = new Employee({ firstName, lastName });
  newEmployee.save(function(error) {
    if (error) throw error;
    console.log(firstName + ' ' + lastName + ' saved successfully!');
  });
  response.redirect("/");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
