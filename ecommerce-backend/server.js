import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import path from "path"

const app = express()
dotenv.config()
connectDb()
const __dirname = path.resolve()
const PORT = process.env.SERVER_PORT || 8080

app.listen(PORT)

app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
	app.use(
		express.static(
			path.join(__dirname, "/ecommerce-frontend/build")
		)
	)
	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(
				__dirname,
				"ecommerce-frontend",
				"build",
				"index.html"
			)
		)
	)
}
