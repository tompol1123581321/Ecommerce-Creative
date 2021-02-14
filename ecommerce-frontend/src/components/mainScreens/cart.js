import React, { useEffect } from "react"
import { Container, Button } from "react-bootstrap"
import "../../style/mainStructure.scss"
import { Link } from "react-router-dom"
import Recapitulation from "../partsOfScreen/recapitulation"
import { useSelector, useDispatch } from "react-redux"
import OrderTogether from "../partsOfScreen/orderTogether"
import { addToCart } from "../../actions"
import { pageAnimation } from "../partsOfScreen/animation"
import { motion } from "framer-motion"

const Cart = ({ match, location, history }) => {
	const productId = match.params.id
	const qty = location.search
		? Number(location.search.split("=")[1])
		: 1

	const dispatch = useDispatch()

	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty))
		}
	}, [dispatch, productId, qty])

	const inCartProducts = useSelector(
		(state) => state.cart.cartItems
	)

	const areThereProducts = inCartProducts.reduce(
		(acc, item) => acc + item.qty,
		0
	)

	const check = () => {
		if (areThereProducts === 0) {
			alert("Your cart is empty!")
		} else {
			history.push("/thankYou")
		}
	}

	return (
		<motion.div
			className="pageContent"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<Container style={{ maxWidth: "25rem" }}>
				<h2>Your Cart:</h2>
				{inCartProducts.map((product) => (
					<Recapitulation product={product} />
				))}
			</Container>

			<Container style={{ maxWidth: "25rem" }}>
				<OrderTogether inCartProducts={inCartProducts} />
			</Container>

			<Container
				className="cartButtons"
				style={{ maxWidth: "35rem", marginTop: "0.7rem" }}
			>
				<Link to="/">
					<Button
						style={{
							width: "8rem",
						}}
					>
						Go back
					</Button>
				</Link>

				<Button
					style={{ width: "8rem" }}
					variant="success"
					onClick={check}
				>
					Order
				</Button>
			</Container>
		</motion.div>
	)
}

export default Cart
