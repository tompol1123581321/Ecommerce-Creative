import mongoose from "mongoose"
import products from "./data/products.js"
import Product from "./models/productModel.js"
import connectDB from "./config/db.js"
connectDB()

const importData = async () => {
	try {
		await Product.deleteMany({})

		const sampleProducts = products.map((product) => {
			return { ...product }
		})

		await Product.insertMany(sampleProducts)

		console.log("Data imported")
		process.exit()
	} catch (err) {
		console.error(`Error: ${err}`)
		process.exit(1)
	}
}
const destroyData = async () => {
	try {
		await Product.deleteMany({})

		console.log("Data destroyed")
		process.exit()
	} catch (error) {
		console.error(`Error: ${error}`)
		process.exit(1)
	}
}

if (process.argv[2] === "-d") {
	destroyData()
} else {
	importData()
}
