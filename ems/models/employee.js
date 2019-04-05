/*
============================================
; Title:  employee.js
; Author: Richard Krasso
; Modified by: David Tarvin
; Date:   21 March 2019
; Description: Employee Model for EMS
;===========================================
*/

// display header at beginning of program
const header = require('../../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "Assignment 7.4"));
console.log("");

// Require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Employee Schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
});

// Export the model so it is publicly available
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
