/*
============================================
; Title:  sullenger-Assignment-2.4.js
; Author: Jason Sullenger
; Date:   02 March 2019
; Description: tests EJS views
;===========================================
*/

// Console logs the header created previously
// const header = require('../../sullenger-header.js');
// console.log(header.display("Jason" , "Sullenger" , "Assignment 2.4"));

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

// The views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"));

// Tell express to use the ejs view engine
app.set("view engine", "ejs")


app.get("/", function(req, res){
  res.render("index", {
    firstName: "Jason",
    lastName: "Sullenger",
    address: "Nampa, ID"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});
