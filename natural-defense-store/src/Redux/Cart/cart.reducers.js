import cartTypes from "./cart.types";
import { handleAddToCart, handleRemoveFromCart, handleDeleteFromCart } from "./cart.util";

const INITIAL_STATE = {
    cartItems: [],
     totalPrice: 0
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartTypes.ADD_TO_CART:
            // return {
                // ...state,
                // cartItems: [
                    // ...state.cartItems,
                    // {
                        // ...action.payload
                    // }
                // ]
                return {
                    ...state,
                    cartItems: handleAddToCart({
                        prevCartItems: state.cartItems,
                        nextCartItem: action.payload
                    })
                }
        case cartTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: handleRemoveFromCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            }
        case cartTypes.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: handleDeleteFromCart({
                    prevCartItems: state.cartItems,
                    nextCartItem: action.payload
                })
            }
        default:
            return state
    }
}

export default cartReducer