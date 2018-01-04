var mongoose = require('mongoose');
var fs = require('fs');
var url = require('url');
var Image = require('./../models/image');
var Food = require('./../models/food');

exports.get_img = function (req,res){
	Image.find(function(err,images){
		if(err) return res.status(500).send({error: 'database failute'});
		console.log(images);
		res.json(images);
	});
};

exports.upload_img = function(req,res){
	var image = new Image();
	console.log("posted");
	image.id = req.body.user_id;
	image.image = req.body.image;
	image.save(function(err){
		if(err){
			console.error(err);
			res.json({result : 0});
			return;
		}
	console.log(image);
	console.log("good posted");
	res.json({result : 1});
	});
};

exports.get_all = function(req,res){
	Food.find(function(err,food){
		if(err) return res.status(500).send({error: 'database failure'});
			console.log(food)
			res.json(food);
	});
};

exports.get_chicken = function(req,res){
	Food.find({type : "chicken"},function(err,food){
		if(err) return res.status(500).send({error: 'database failure'});
	console.log(food);
	res.json(food);
	});
};

exports.get_pizza = function(req,res){
	Food.find({type : "pizza"}, function(err,food){
		if(err) return res.status(500).send({error: 'database failure'});
	console.log(food);
	res.json(food);
	});
};

exports.get_etc = function(req,res){
	Food.find({type: "etc"}, function(err,food){
		if(err) return res.status(500).send({error: 'database failure'});
	console.log(food);
	res.json(food);
	});
};

		
