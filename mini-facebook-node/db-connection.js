const mongoose = require('mongoose');
const dbName = "mini-facebook";
const mongodbServerAddress = "localhost:27017";
const connectionUrl = "mongodb://"+mongodbServerAddress+"/"+dbName;
mongoose.connect(connectionUrl, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("successfully connected to mongodb database")
});