import React, { useState } from "react"
import {
	Button,
	Card,
	ToggleButton,
	ToggleButtonGroup,
} from "react-bootstrap"
import "../../style/mainStructure.scss"
import { motion } from "framer-motion"
import { pageAnimation } from "../partsOfScreen/animation"

const Docs = () => {
	return (
		<motion.div
			className="pageContent"
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<ToggleButtonGroup
				type="radio"
				name="language"
				defaultValue={["english"]}
			>
				<ToggleButton value={"english"}>
					English
				</ToggleButton>
				<ToggleButton value={"czech"}>Czech</ToggleButton>
			</ToggleButtonGroup>

			<Card>
				<Card.Header>About the project</Card.Header>
				<Card.Body>
					<Card.Text>
						Hello, My name is Tomáš Polívka.
					</Card.Text>
					<Card.Text>
						This project is a demo of an ecommerce website.
						It's only purpose is to represent and show some
						of my work.
					</Card.Text>
					<Card.Text>
						In this project, I used MERN (MongoDB, Express,
						React, Redux). Other dependencies include SASS,
						React-Bootstrap, Framer-Motion, React-Router,
						Axios and more.
					</Card.Text>
					<Card.Text>
						{" "}
						The source code for this project can be found at
						my github account.
					</Card.Text>
					<Card.Link
						style={{ color: "green" }}
						href="https://github.com/tompol1123581321"
					>
						Link to github{" "}
					</Card.Link>
				</Card.Body>
			</Card>
		</motion.div>
	)
}

export default Docs
