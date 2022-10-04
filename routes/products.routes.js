const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config');
const Product = require("../models/Product.model")

//CREATE a product
router.post("/",fileUploader.single("image") ,(req,res,next)=>{
	console.log(fileUploader)
	const{productname,description,brand,categoryone,categorytwo,subcategory,price,image} = req.body
	const product = {
		productname,
		description,
		brand,
		categoryone,
		categorytwo,
		subcategory,
		price,
		image
	}
 Product.create(product)
 .then(createdProduct=>{
	res.json(createdProduct)
 })
 .catch(err=>console.log(err))
})

//Read all the products
router.get("/",(req,res,next)=>{
	Product.find()
	.then(products =>{
		res.json(products)
	})
	.catch(err=>console.log(err))
})

//product id
router.get("/:id",(req,res,next)=>{
	const{id} = req.params
	Product.findById(id)
	.then(product =>{
		res.json(product)
	}) 
	.catch(err => console.log(err))
})

//UPDATE a product
router.put("/:id",(req,res,next)=>{
  const {id} = req.params
	Product.findByIdAndUpdate(id,req.body,{new: true})
	.then(product => {
		res.json(product)
	})
	.catch(err => console.log(err))
})

//DELETE a product
router.delete("/:id",(req,res,next)=>{
	const {id} = req.params;
	Product.findByIdAndDelete(id)
	.then(product => {
		res.json(product)
	})
	.catch(err => console.log(err))
})

module.exports = router;