var mongodb = require('mongodb');
var dbServer = new mongodb.Server('localhost',27017,{auto_reconnect:true});
var db = new mongodb.Db('mydb',dbServer,{w:1});
