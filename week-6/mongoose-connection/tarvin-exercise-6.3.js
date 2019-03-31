var header = require("../../tarvin-header")

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
