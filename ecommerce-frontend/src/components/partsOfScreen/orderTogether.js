import React from "react"
import "../../style/mainStructure.scss"
import {
	Col,
	ListGroup,
	ListGroupItem,
	Row,
} from "react-bootstrap"

const OrderTogether = ({ inCartProducts }) => {
	return (
		<ListGroup>
			<ListGroupItem>
				<Row>
					<Col> Products:</Col>
					<Col>
						{inCartProducts.reduce(
							(acc, item) => acc + item.qty,
							0
						)}
					</Col>
				</Row>
			</ListGroupItem>
			<ListGroupItem>
				<Row>
					<Col>Total price:</Col>
					<Col>
						{inCartProducts.reduce(
							(acc, item) => acc + item.qty * item.price,
							0
						)}
						,-
					</Col>
				</Row>
			</ListGroupItem>
		</ListGroup>
	)
}

export default OrderTogether
