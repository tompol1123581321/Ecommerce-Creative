import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../../style/mainStructure.scss"
import {
	Container,
	ListGroup,
	Col,
	Row,
	Button,
	Image,
	Form,
} from "react-bootstrap"
import Rating from "../partsOfScreen/rating"
import { pageAnimation } from "../partsOfScreen/animation"
import { motion } from "framer-motion"

const ProductScreen = ({ history, match }) => {
	const [product, setProduct] = useState({})
	const [stav, setstav] = useState("In stock")
	const [varianta, setvarianta] = useState("success")
	const [functional, setfunctional] = useState(false)
	const [qty, setQty] = useState(1)
	useEffect(() => {
		const gettingProduct = async () => {
			const { data } = await axios.get(
				`/api/products/${match.params.id}`
			)
			setProduct(data)
		}
		gettingProduct()
	}, [match.params])

	useEffect(() => {
		if (product.countInStock === 0) {
			setstav("Momentarly not available")
			setvarianta("danger")
			setfunctional(true)
		}
	}, [product.countInStock])

	const addToCartHandler = () => {
		history.push(`/cart/${match.params.id}?qty=${qty}`)
	}

	return (
		<motion.div
			className="pageContent"
			style={{ overFlow: "hidden" }}
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Container
				className="containerProduct"
				style={{
					paddingTop: "2rem",
					paddingBottom: "2rem",
				}}
			>
				<Row>
					<Col md={5} className="imgGo">
						<Image
							src={product.image}
							alt={product.name}
							fluid
							rounded
						/>
						<Link to="/">
							<Button
								style={{
									marginTop: "1rem",
									marginBottom: "1rem",
								}}
								variant="secondary"
							>
								Back
							</Button>
						</Link>
					</Col>
					<Col md={7}>
						<ListGroup variant="rounded" className="imgGo">
							<ListGroup.Item>
								<h3>{product.name}</h3>
								<h4>{product.autor}</h4>
							</ListGroup.Item>
							<ListGroup.Item>
								<Rating
									value={product.rating}
									text={` ${product.numReviews}reviews`}
								/>
							</ListGroup.Item>
							<ListGroup.Item variant={varianta}>
								<h4>{stav}</h4>
								<h5>
									Count in stock: {product.countInStock}
								</h5>
							</ListGroup.Item>
							<ListGroup.Item>
								<div className="price">
									<h5>Price: </h5>
									<h4>{product.price} CZK</h4>
								</div>
							</ListGroup.Item>
							<ListGroup.Item>
								<p>{product.description}</p>
							</ListGroup.Item>

							<ListGroup.Item>
								{product.countInStock > 0 && (
									<Row>
										<h4>Quantity: </h4>
										<Form.Control
											style={{
												maxWidth: "5rem",
												marginLeft: ".5rem",
											}}
											as="select"
											value={qty}
											onChange={(e) =>
												setQty(e.target.value)
											}
										>
											{[
												...Array(
													product.countInStock
												).keys(),
											].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</Form.Control>

										<Button
											onClick={addToCartHandler}
											variant="success"
											style={{ marginLeft: "1rem" }}
											disabled={functional}
										>
											To the cart
										</Button>
									</Row>
								)}
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</motion.div>
	)
}

export default ProductScreen
