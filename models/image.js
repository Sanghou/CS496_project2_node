var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var imageSchema = new Schema({

	id : String,
	image : String
},{
	collection : "images"
});
module.exports = mongoose.model('image',imageSchema);
