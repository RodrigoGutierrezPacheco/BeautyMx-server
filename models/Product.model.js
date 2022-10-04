const mongoose = require("mongoose")
const { Schema, model } = mongoose;
const fileUploader = require('../config/cloudinary.config');

const productSchema = new Schema({
	productname:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	brand:{
		type: String,
		enum:["anastasia","beautycreations","colourpop","elf","foreo","hudabeauty","morphe","theordinary","toofaced"],
		required: true
	},
	categoryone:{
		type: String,
		enum:["maquillaje","cuidadoparalapiel","otros"],
		required: true
	},
	categorytwo:{
		type:String,
		enum:["cara","ojos","labios","mejillas"],
		required: true
	},
	subcategory:{
		type: String,
		enum:["paletas","rimel","labial"],
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	image:{
		type: String,
		required: true
	}
});

const Products = model("Products", productSchema);

module.exports = Products;
