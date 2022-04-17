export const exisitingCartItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => (cartItem.documentID === nextCartItem.documentID) && (cartItem.size === nextCartItem.size)
    )
}

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem}) => {
        const quantityIncrement = 1
        const cartItemExists = exisitingCartItem({prevCartItems, nextCartItem})
        console.log(`Previous Cart Items: ${prevCartItems} \n Next Cart Item: ${nextCartItem.productName}`)

        if(cartItemExists){
            return prevCartItems.map(cartItem => 
                (cartItem.documentID === nextCartItem.documentID) && (cartItem.size === nextCartItem.size) ? {
                    ...cartItem,
                    quantity: cartItem.quantity + quantityIncrement
                } : cartItem)
        }

        return [
            ...prevCartItems,
            {
                ...nextCartItem,
                quantity: quantityIncrement
            }
        ]
    }

export const handleRemoveFromCart = ({prevCartItems, nextCartItem}) => {
    const quantityIncrement = 1
    const cartItemExists = exisitingCartItem({prevCartItems, nextCartItem})
    console.log(`Previous Cart Items: ${prevCartItems} \n Next Cart Item: ${nextCartItem.productName}`)

    if(cartItemExists && nextCartItem){
        return prevCartItems.map(cartItem => 
            (cartItem.documentID === nextCartItem.documentID) && (cartItem.size === nextCartItem.size) ? {
                ...cartItem,
                quantity: cartItem.quantity - quantityIncrement
            } : cartItem)
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: quantityIncrement
        }
    ]
}

export const handleDeleteFromCart = ({prevCartItems, nextCartItem}) => {
    const newCart =[]
    const cartItemExists = exisitingCartItem({prevCartItems, nextCartItem})
    console.log(`Previous Cart Items: ${prevCartItems} \n Next Cart Item: ${nextCartItem.productName}`)

    if(cartItemExists){
        prevCartItems.map(cartItem => 
            !((cartItem.documentID === nextCartItem.documentID) && (cartItem.size === nextCartItem.size)) ? 
                newCart.push(cartItem)
                // ...cartItem,
                // quantity: 0
            : cartItem)
    }

    return newCart

    // return [
    //     ...prevCartItems,
    //     {
    //         ...nextCartItem,
    //         quantity: 0
    //     }
    // ]
}