import cartTypes from "./cart.types";

export const addProductToCart = (nextCartItem) => ({
    type: cartTypes.ADD_TO_CART,
    payload: nextCartItem
})

export const removeProductFromCart = (nextCartItem) => ({
    type: cartTypes.REMOVE_FROM_CART,
    payload: nextCartItem
})

export const deleteProductFromCart = (cartItem) => ({
    type: cartTypes.DELETE_FROM_CART,
    payload: cartItem
})