var express = require("express");
var http = require("http");

var app = express();

app.get("/pokemon/:age", function(request, response) {
  var age = parseInt(request.params.age, 10);
  response.json({
    name: "Pikachu",
    owner: "Ash Ketchum",
    age: age
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
