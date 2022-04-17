import { combineReducers } from 'redux'

import userReducer from './User/user.reducer'
import productsReducer from './Products/products.reducers'
import cartReducer from './Cart/cart.reducers'

export default combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cartData: cartReducer
})