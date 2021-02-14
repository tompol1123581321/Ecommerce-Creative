import React, { useEffect, useState } from "react"
import {
	ListGroup,
	Button,
	Row,
	Col,
	Form,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"
import "../../style/welcome.scss"

const NumberOfProducts = ({ product }) => {
	let history = useHistory()
	const [functional, setFunctional] = useState(false)
	const [
		quantityOfProducts,
		setQuantityOfProducts,
	] = useState(1)

	useEffect(() => {
		if (product.countInStock === 0) {
			setFunctional(true)
		}
	}, [product.countInStock])

	return (
		<ListGroup.Item>
			{product.countInStock > 0 && (
				<Row>
					<Col>Quantity</Col>
					<Col>
						<Form.Control
							as="select"
							value={quantityOfProducts}
							onChange={(e) =>
								setQuantityOfProducts(e.target.value)
							}
						>
							{[...Array(product.countInStock).keys()].map(
								(x) => (
									<option key={x + 1} value={x + 1}>
										{x + 1}
									</option>
								)
							)}
						</Form.Control>
					</Col>
				</Row>
			)}
			<Row>
				<Button
					style={{ marginLeft: "1rem" }}
					onClick={() => {
						history.push(
							`/cartScreen/${product._id}?qty=${quantityOfProducts}`
						)
					}}
					variant="success"
					disabled={functional}
				>
					<b> Přidat do košíku</b>
				</Button>
			</Row>
		</ListGroup.Item>
	)
}

export default NumberOfProducts
