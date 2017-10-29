var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://lab9du:123456@ds011024.mlab.com:11024/lab9db';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

