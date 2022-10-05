const router = require("express").Router()
const fileUploader = require('../config/cloudinary.config');
const Product = require("../models/Product.model")

//All the products
router.get("/:id",(req,res,next)=>{
	const{id} = req.params
	Product.findById(id)
	.then(product =>{
		res.json(product)
	}) 
	.catch(err => console.log(err))
})

//Upload File
router.post("/upload-file",fileUploader.single("imageUrl") ,(req,res,next)=>{
	res.json({imageUrl:req.file.path})
})

//CREATE a product
router.post("/",(req,res,next)=>{
	console.log(req.body)
	const{productname,description,brand,categoryone,categorytwo,subcategory,price,imageUrl} = req.body
	const product = {
		productname,
		description,
		brand,
		categoryone,
		categorytwo,
		subcategory,
		price,
		imageUrl,
	}
 Product.create(product)
 .then(createdProduct=>{
	res.json({createdProduct})
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


//UPDATE a product
// router.get("/:id",(req,res,next)=>{
// 	const {id} = req.params
// 	Product.findById(id)
// 	.then(product =>{
// 		console.log("Edita producto----->", product)
// 		res.json(product)
// 	})
// 	.cath(error=>console.log(error))
// })

router.put("/:id",(req,res,next)=>{
	const {id} = req.params
	const{productname,description,brand,categoryone,categorytwo,subcategory,price,imageUrl} = req.body
	const product = {
		productname,
		description,
		brand,
		categoryone,
		categorytwo,
		subcategory,
		price,
		imageUrl,
	}
	Product.findByIdAndUpdate(id,req.body,{new: true})
	.then(product => {
		console.log("REQBODY---->",product)
		res.json({product})
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