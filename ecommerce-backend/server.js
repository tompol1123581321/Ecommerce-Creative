import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"

const app = express()
dotenv.config()
connectDb()

app.listen(process.env.SERVER_PORT)

app.get("/", (req, res) => {
	res.send("api is running")
})

app.use("/api/products", productRoutes)
