const mongoose	= require('mongoose');
const Schema	= mongoose.Schema;

//Défini le schema de notre model
let WeedSchema = new Schema({
	strain: {type: String, required: true, max: 50},
	type: {type: String, required: false, max: 20},
	rating: {type: Number, required: false},
	effect: {type: String, required: false, max: 150},
	flavor: {type: String, required: false, max: 150},
	description: {type: String, required: false, max: 800}
});

// Exporte le model
module.exports = mongoose.model('Weed', WeedSchema);