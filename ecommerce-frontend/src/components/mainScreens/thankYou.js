import React from "react"
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"
import { pageAnimation } from "../partsOfScreen/animation"

const ThankYou = () => {
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			className="pageContent"
		>
			<Container>
				<h2>Thank you for your purchase. </h2>
			</Container>
		</motion.div>
	)
}

export default ThankYou
