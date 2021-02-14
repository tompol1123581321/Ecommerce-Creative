import { React, useState, useEffect } from "react"
import {
	Card,
	ListGroup,
	ListGroupItem,
} from "react-bootstrap"
import "../../style/mainStructure.scss"
import Rating from "./rating"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function ProductCard({ product }) {
	const [bgName, setbgName] = useState("secondary")
	const [stav, setstav] = useState("skladem")
	const [varianta, setvarianta] = useState("success")
	useEffect(() => {
		if (product.countInStock === 0) {
			setstav(" není skladem")
			setvarianta("danger")
		}
	}, [product.countInStock])

	return (
		<Link to={`/product/${product._id}`}>
			<motion.div
				className="card-wrapper"
				whileHover={{ scale: 1.1, rotate: 5 }}
				whileTap={{ scale: 0.9 }}
				style={{ maxWidth: "18rem", margin: "auto" }}
			>
				<Card
					border={bgName}
					className="my-5  rounded"
					onMouseEnter={() => setbgName("success")}
					onMouseLeave={() => setbgName("secondary")}
				>
					<Card.Img src={product.image} variant="top" />
					<ListGroup>
						<ListGroupItem>
							<h5>{product.name}</h5>
							<h6>{product.autor}</h6>
						</ListGroupItem>
						<ListGroupItem>
							<b>Cena: {product.price}CZK</b>
						</ListGroupItem>

						<ListGroupItem>
							<Rating
								value={product.rating}
								text={`  ${product.numReviews} hodnocení`}
							/>
						</ListGroupItem>
						<ListGroupItem variant={varianta}>
							<h5 className="skladem">{stav}</h5>
						</ListGroupItem>
					</ListGroup>
				</Card>
			</motion.div>
		</Link>
	)
}

export default ProductCard
