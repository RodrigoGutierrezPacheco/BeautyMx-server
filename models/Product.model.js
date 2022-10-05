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
		enum:["Anastasia","Beauty Creations","Colourpop","Elf","Foreo","Huda Beauty","Morphe","The Ordinary","Too Faced"],
		required: true
	},
	categoryone:{
		type: String,
		enum:["Maquillaje","Cuidado para la piel","Otros"],
		required: true
	},
	categorytwo:{
		type:String,
		enum:["Cara","Ojos","Labios","Mejillas"],
		required: true
	},
	subcategory:{
		type: String,
		enum:["Paletas","Rimel","Labial"],
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	imageUrl:{
		type: String,
		required: true
	},
	user:[{
		type: Schema.Types.ObjectId,
		ref:"Cart"
	}]
});

const Products = model("Products", productSchema);

module.exports = Products;
