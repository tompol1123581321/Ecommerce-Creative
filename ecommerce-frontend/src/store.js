import {
	createStore,
	applyMiddleware,
	combineReducers,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { cartReducer } from "./cartReducer"
const reducer = combineReducers({
	cart: cartReducer,
})
const cartItemsFromStorage = localStorage.getItem(
	"cartItems"
)
	? JSON.parse(localStorage.getItem("cartItems"))
	: []
const initialState = {
	cart: { cartItems: cartItemsFromStorage },
}
const middleware = [thunk]
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
