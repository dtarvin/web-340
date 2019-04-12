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

const express = require("express");
const http = require("http");
const path = require("path");
const logger = require("morgan");
const helmet = require("helmet");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
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

// setup csrf protection
let csrfProtection = csrf({cookie: true});

// initialize the express application
let app = express();

// set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

/************************************** */
app.set("port", process.env.PORT || 8080);
/************************************** */

// use statements
app.use(express.static(__dirname + '/public'));
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie("XSRF-TOKEN", token);
  response.locals.csrfToken = token;
  next();
});

// routing
app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

/***************************************** */
app.get("/new", function(request, response) {
  response.render("new", {
    title: 'EMS | New'
  });
});
/***************************************** */

// My post function****************************
// app.post("/process", function(request, response) {
//   console.log(request.body.txtName);
//   response.redirect("/");
// });

// post process in fms
app.post('/process', function(request, response) {
  // console.log(request.body.txtName);
  if (!request.body.txtFirstName || !request.body.txtLastName) {
    response.status(400).send("Entries must have a first and last name");
    return;
  }

  // get request's form data
  const employeeFirstName = request.body.txtFirstName;
  console.log(employeeFirstName);
  const employeeLastName = request.body.txtLastName;
  console.log(employeeLastName);

  // create employee model
  let employee = new Employee({
    firstName: employeeFirstName,
    lastName: employeeLastName
  });

  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeFirstName + ' ' + employeeLastName + ' saved successfully!');
      response.redirect("/");
    }
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
