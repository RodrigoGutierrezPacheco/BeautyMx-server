const mongoose = require("mongoose")
const { Schema, model } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const CartSchema = new Schema ({
	products:{
		type: Schema.Types.ObjectId,
		ref: "Product"
	}

	user:{
		type: Schema.Types.ObjectId,
		ref: "User"
	}

})