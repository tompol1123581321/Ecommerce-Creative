import mongoose from "mongoose"

const Schema = mongoose.Schema

const productSchema = new Schema({
	name: String,
	autor: String,
	image: String,
	description: String,
	price: Number,
	countInStock: Number,
	rating: Number,
	numReviews: Number,
	specialId: String,
})

const Product = mongoose.model("Product", productSchema)

export default Product
