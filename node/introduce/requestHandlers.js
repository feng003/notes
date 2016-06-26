var querystring = require("querystring");
var exec = require('child_process').exec;

var MongoClient = require('mongodb').MongoClient;
var assert   = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url      = 'mongodb://localhost:27017/node';

function index(response, postData) {
    console.log("Request handler 'index' was called.");

    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<input name="title" type="text" />' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function start(res, postData) {
    console.log("request handle 'start' was called");
    var content = "empty";
    //exec('ls -lah',
    // exec('find / ',
    //   function(error,stdout,stderr){
    //        content = stdout;
    //    }
    // );
    // return content;
    exec("ls -lah", function (error, stdout, stderr) {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write(stdout);
        res.end();
    });
}

function find(response, postData) {
    console.log("Request handler 'find' was called.");

    exec("find /", {timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}

function upload(res, postData) {
    console.log("request handler ' upload' was called");
    // return "hello upload";
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("You've sent: " + querystring.parse(postData).text);
    res.end();
}
function mongo(res){
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server.");
        db.close();
    });
}

function mongoinsert(res)
{
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
}

function mongofind(res) {
    console.log("request handler ' mongofind' was called");
    var findRestaurants = function (db, callback) {
        var cursor = db.collection('restaurants').find();
        cursor.each(function (err, doc) {
            console.log(typeof doc);
            assert.equal(err, null);
            if (doc != null) {
                res.writeHead(200, {"Content-Type": "text/plain"});
                res.write("mongofind: " + JSON.stringify(doc));
                res.end();
            } else {
                callback();
            }
        });
    };

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        findRestaurants(db, function () {
            db.close();
        });
    });
}

function mongodel(res) {
    var removeRestaurants = function (db, callback) {
        db.collection('restaurants').deleteMany(
            {"borough": "Manhattan"},
            function (err, results) {
                console.log(results);
                callback();
            }
        );
    };

    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        removeRestaurants(db, function () {
            db.close();
        });
    });

}

exports.index = index;
exports.start = start;
exports.find  = find;
exports.upload = upload;
exports.mongo  = mongo;
exports.mongoinsert  = mongoinsert;
exports.mongofind = mongofind;
exports.mongodel  = mongodel;
