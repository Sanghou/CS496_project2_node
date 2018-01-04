var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodSchema = new Schema({

	type : String,
	name : String,
	number : String,
	only_cash : Boolean
},{
	collection : "foods"
});

module.exports = mongoose.model('food',foodSchema);
