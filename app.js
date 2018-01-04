var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var routes = require('./routes'); //
var http = require('http');//

app.use(bodyParser.json({limit: '25mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '25mb'}));

//var Image = require('./models/image');
//var Food = require('./models/food');
var port = process.env.PORT || 52273;



//var router_img = require('./routes')(app,Image);
//var router_food = require('./routes')(app, Food);



var server = app.listen(port, function(){
	console.log("Express server has started on port" + port)
});

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
	console.log("connected to mongod server");
});
mongoose.connect('mongodb://127.0.0.1:27017');

app.get('/upload',routes.get_img);
app.post('/upload',routes.upload_img);
app.get('/all_food',routes.get_all);
app.get('/chicken',routes.get_chicken);
app.get('/pizza',routes.get_pizza);
app.get('/etc',routes.get_etc);

//app.post('/upload',function(req,res){
//	console.log(req.body.user_id);
//	console.log(req.body.image);
//	var img = new testmodel({id : req.body.user_id , img:"gi"});
//	console.log(img);
//	console.log("before save");
//	img.save(function(err, img){
//		if(err) return console.error(err);
//		console.log(img);
//	});
//	console.log("after save");
//});
