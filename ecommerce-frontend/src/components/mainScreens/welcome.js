import React, { useEffect, useState } from "react"
import { Row, Col } from "react-bootstrap"

import ProductCard from "../partsOfScreen/productCard"
import axios from "axios"
import { motion } from "framer-motion"
import { pageAnimation } from "../partsOfScreen/animation"
import "../../style/mainStructure.scss"

const Welcome = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const gettingProducts = async () => {
			const { data } = await axios.get("api/products")
			setProducts(data)
		}
		gettingProducts()
	}, [])

	return (
		<motion.div
			className="pageContent"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<h1>Our Products</h1>
			<Row>
				{products.map((product) => (
					<Col sm={12} md={6} lg={4} xl={3}>
						<ProductCard product={product} />
					</Col>
				))}
			</Row>
		</motion.div>
	)
}

export default Welcome
