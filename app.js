var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var db;
var app = express();
var mongoose = require('mongoose');
var schema = mongoose.Schema;


app.use(bodyParser.json());

MongoClient.connect(url, function(err,database){
	db = database.db("test");
	db.createCollection("image",function(err,res){
		console.log("collection, db create");
	});

	var server = app.listen(52273,function(){
	var port = server.address().port;
	console.log("http://52.78.103.222:%s",port);
	});
});

app.post('/upload',function(req,res){
	console.log(req);
	console.log("where");
	console.log(req.body);
});
