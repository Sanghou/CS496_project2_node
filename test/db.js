var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var db;
var app = express();
//app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

MongoClient.connect(url, function(err,database){
    console.log("Database created.");
    db = database.db("mydb");
    db.createCollection("friends", function(err,res){
	console.log("Collection created.");
    });

    //Start app only after connection is ready.
    var server = app.listen(8080,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Listening at http://%s:%s", host,port);
    });
});

app.post('/', function(req,res){    
    console.log("Received POST\n");
    console.log(req.body);

    //Parse json array and insert json documents.
    //var array = JSON.parse(req.body);
    //var array
    db.collection("friends").insertMany(req.body);
    
    /*
    array.forEach(function(friend){
	var friendNamd = friend.name;
	console.log(friendNamd);
    });

    
    db.collection("friends").insertOne(req.body, function(err,res){
	if(err) throw err;
	console.log("Document inserted");
	//db.close();
    });
    */
    db.collection("friends").find().toArray(function(err,docs){
	console.log(JSON.stringify(docs));
    });
    res.send(req.body);
    
});

app.get('/', function(req,res){
    //Send db's data.
    
    console.log("Received GET\n");
    var query = {};
    var name = req.query.name;
    query["name"]=name;
    //var name = req.query.name;
    console.log(query);
    db.collection("friends").find(query).toArray(function(err,result){
	if(err) throw err;
	console.log(result);
	res.send(result);
    });
});

