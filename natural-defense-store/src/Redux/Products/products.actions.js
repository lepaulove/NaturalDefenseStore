import productTypes from "./products.types"

export const addProductStart = productData => ({
    type: productTypes.ADD_NEW_PRODUCT_START,
    payload: productData
})

export const fetchProductsStart = () => ({
    type: productTypes.FETCH_PRODUCT_START
})

export const setProducts = products => ({
    type: productTypes.SET_PRODUCTS,
    payload: products
})

export const deleteProductStart = productID => ({
    type: productTypes.DELETE_PRODUCT_START,
    payload: productID
})

export const setCurrentProduct = currentProduct => ({
    type: productTypes.SET_CURRENT_PRODUCT,
    payload: currentProduct
})

export const setAvailableIngredients = ingredients => ({
    type: productTypes.SET_AVAILABLE_INGREDIENTS,
    payload: ingredients
})