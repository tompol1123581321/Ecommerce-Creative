import mongoose from "mongoose"
import dotenv from "dotenv"

const connectDb = async () => {
	try {
		const conn = await mongoose.connect(
			process.env.DB_HOST,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
				useCreateIndex: true,
			}
		)
		console.log(`Connected to ${conn.connection.host}`)
	} catch (err) {
		console.error(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDb
