import Welcome from "./components/mainScreens/welcome"
import Header from "./components/mainScreens/header"
import Footer from "./components/mainScreens/footer"
import "./style/mainStructure.scss"
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from "react-router-dom"
import { Container } from "react-bootstrap"
import ProductScreen from "../src/components/mainScreens/productScreen"
import Cart from "./components/mainScreens/cart"
import ThankYou from "./components/mainScreens/thankYou"
import Docs from "./components/mainScreens/docs"

function App() {
	return (
		<div>
			<Router>
				<Header />

				<Container style={{ maxWidth: "90rem" }}>
					<Switch>
						<Route path="/" component={Welcome} exact />
						<Route
							path="/product/:id"
							component={ProductScreen}
							exact
						/>
						<Route path="/cart/:id?" component={Cart} />
						<Route path="/thankYou" component={ThankYou} />
						<Route path="/Docs" component={Docs} />
					</Switch>
				</Container>

				<Footer />
			</Router>
		</div>
	)
}

export default App
