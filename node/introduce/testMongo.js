var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var assert = require('assert');
var ObjectId = mongodb.ObjectID;
var url = 'mongodb://localhost:27017/node';

var insertDocument = function(db,callback){
	db.collection('restaurants').insertOne({
	"address" : {
         "street" : "2 Avenue",
         "zipcode" : "10075",
         "building" : "1480",
         "coord" : [ -73.9557413, 40.7720266 ]
      },
      "borough" : "Manhattan",
      "cuisine" : "Italian",
      "grades" : [
         {
            "date" : new Date("2014-10-01T00:00:00Z"),
            "grade" : "A",
            "score" : 11
         },
         {
            "date" : new Date("2014-01-16T00:00:00Z"),
            "grade" : "B",
            "score" : 17
         }
      ],
      "name" : "Vella",
      "restaurant_id" : "41704620"
   },function(err,result){
	assert.equal(err,null);
	console.log('Inserted a document into the restaurants collection.');
	callback();
});

};
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});


//test
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});


var dbServer = new mongodb.Server('localhost',27017,{auto_reconnect:true});
//console.log(dbServer);
var db = new mongodb.Db('node',dbServer,{w:1});
//console.log(db);
if(db){
	console.log(1);
}else{
	console.log(2);
}