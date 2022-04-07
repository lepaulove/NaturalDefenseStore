import productTypes from "./products.types"

const INITIAL_STATE = {
    products: [],
    product: {},
    ingredients: []
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case productTypes.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case productTypes.SET_CURRENT_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case productTypes.SET_AVAILABLE_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            }
        default:
            return state
    }
}

export default productsReducer