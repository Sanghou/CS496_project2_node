
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        site : String, //check is it facebook or phone
	number : long,
	number_type : String // check is it phone or home or etc.
    },
    {
        collection: 'Contacts'
    }

);

const Contact = mongoose.model('Contact', heroSchema);

module.exports = Contact;
