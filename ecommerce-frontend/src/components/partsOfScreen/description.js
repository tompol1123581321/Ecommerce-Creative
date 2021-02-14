import React from "react"
import { Card } from "react-bootstrap"

const Description = ({ language }) => {
	if (language === "english") {
		return (
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
		)
	} else if (language === "czech") {
		return (
			<Card>
				<Card.Header>O projektu</Card.Header>
				<Card.Body>
					<Card.Text>
						Dobrý den, jmenuji se Tomáš Polívka.
					</Card.Text>
					<Card.Text>
						Tento projekt je částečná ukázka e-shopu. Slouží
						jen jako ukázka mé práce.
					</Card.Text>
					<Card.Text>
						V tomto projektu využívám, kromě jiného MERN
						(MongoDB, Express, React, Redux).
					</Card.Text>
					<Card.Text>
						{" "}
						Zdrojový kód k tomuto ptojektu můžete najít na
						webu github
					</Card.Text>
					<Card.Link
						style={{ color: "green" }}
						href="https://github.com/tompol1123581321"
					>
						Odkaz na github{" "}
					</Card.Link>
				</Card.Body>
			</Card>
		)
	}
}

export default Description
