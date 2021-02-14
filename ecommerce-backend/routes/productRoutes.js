import express from "express"
import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"

const router = express.Router()

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		res.send(products)
	})
)

router.get(
	"/:_id",
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params._id)
		if (product) {
			res.send(product)
		} else {
			res.status(404).json({ message: "product not found" })
		}
	})
)

export default router
