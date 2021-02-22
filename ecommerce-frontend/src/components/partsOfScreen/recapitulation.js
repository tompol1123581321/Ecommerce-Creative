import React from "react"
import {
	Button,
	Card,
	Image,
	ListGroup,
	ListGroupItem,
	Row,
	Col,
	Form,
} from "react-bootstrap"
import "../../style/mainStructure.scss"
import { useDispatch } from "react-redux"
import { addToCart, removeFromCart } from "../../actions"
import { useHistory } from "react-router-dom"

const Recapitulation = ({ product }) => {
	const removeFromCartHandler = (_id) => {
		dispatch(removeFromCart(_id))
	}

	const dispatch = useDispatch()
	const history = useHistory()
	return (
		<Card rounded={true}>
			<ListGroup>
				<ListGroupItem>
					<Row>
						<Col>
							<Image
								rounded
								src={product.image}
								style={{ maxWidth: "6rem" }}
							></Image>
						</Col>
						<Col xs={6}>
							<Row>
								<Card.Title>{product.name}</Card.Title>
							</Row>
							<Row>
								Amount:
								<Form.Control
									style={{ maxWidth: "5rem" }}
									as="select"
									value={product.qty}
									onChange={(e) =>
										dispatch(
											addToCart(
												product.id,
												Number(e.target.value)
											)
										)
									}
								>
									{[
										...Array(product.countInStock).keys(),
									].map((x) => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</Form.Control>
							</Row>

							<Row>
								Price: {product.qty * product.price + `,-`}
							</Row>
						</Col>
						<Col>
							<Row>
								<Button
									position="bottom"
									variant="danger"
									onClick={() => {
										removeFromCartHandler(product.id)
										history.push("/cart")
									}}
								>
									<i class="fas fa-trash-alt"></i>
								</Button>
							</Row>
						</Col>
					</Row>
				</ListGroupItem>
			</ListGroup>
		</Card>
	)
}

export default Recapitulation
