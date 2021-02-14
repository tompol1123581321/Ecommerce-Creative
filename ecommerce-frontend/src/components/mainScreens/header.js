import React from "react"
import "../../style/mainStructure.scss"
import { Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => {
	return (
		<Navbar variant="dark" bg="dark" expand="lg">
			<LinkContainer to="/">
				<Navbar.Brand>Creative</Navbar.Brand>
			</LinkContainer>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto dark">
					<LinkContainer to="/cart">
						<Nav.Link>Cart</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/Docs">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
export default Header
