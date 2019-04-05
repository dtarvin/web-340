/*
============================================
; Title:  tarvin-exercise-6.3.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   31 March 2019
; Description: Mongoose connection
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Exercise 6.3"));
console.log("");

var mongoose = require("mongoose");

var mongoDB = "mongodb+srv://bellevue_student:david1234@cluster0-xzug0.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once("open", function() {
  console.log("Application connected to MongoDB Atlas instance");
});
