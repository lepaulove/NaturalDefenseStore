import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Button, Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart, deleteProductFromCart, updateTotalPrice } from "../Redux/Cart/cart.actions";
import { useNavigate } from "react-router-dom";
import { apiInstance } from "../utils";


const mapState = ({cartData}) => ({
    cartItem: cartData.cartItems,
    cartTotal: cartData.totalPrice
})

const Cart = () => {
    const cartItems = useSelector(mapState)
    let line_items = []
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRemoveFromCart = ({...product}) => {
        if(product.quantity < 2) return
        dispatch(removeProductFromCart(product))
        dispatch(updateTotalPrice())
    }
    const handleAddToCart = ({...product}) => {
        dispatch(addProductToCart(product))
        dispatch(updateTotalPrice())
    }
    const handleDeleteFromCart = ({...product}) => {
        dispatch(deleteProductFromCart(product))
        dispatch(updateTotalPrice())
    }

    let productTotal = 0

    const total = cartItems.cartItem.map((item) => {productTotal += item.price * item.quantity})

    cartItems.cartItem.map((item, index) => {
        let temp = {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `${item.productName} - ${item.size} `
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          }
              console.log(temp)
        line_items.push(temp)
        console.log(line_items)
    })

    console.log(cartItems.cartTotal)

    return(
        <>
            <TableContainer component={Paper} sx={{width:'100%'}}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Unit Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                        <TableCell align="right">Remove</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.cartItem.map((item, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {item.productName}
                        </TableCell>
                        <TableCell align="right">{item.productCategory}</TableCell>
                        <TableCell align="right">{item.size}</TableCell>
                        <TableCell align="right">{item.price}</TableCell>
                        <TableCell align="right"><Button onClick={() => {handleAddToCart(item)}}>+</Button>{item.quantity}<Button onClick={() => {handleRemoveFromCart(item)}}>-</Button></TableCell>
                        <TableCell align="right">{(item.price*item.quantity).toFixed(2)}</TableCell>
                        <TableCell align="right"><Button onClick={() => {handleDeleteFromCart(item)}}>Remove</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            <Typography variant='h5' style={{marginLeft:'1rem'}}>{`TOTAL: ${cartItems.cartTotal.toFixed(2)}`}</Typography>
            <Button sx={{backgroundColor:'black', color:'white', ml:2}} onClick={() => apiInstance.post('/payments', {lineItems: line_items}).then((response) => {(window.location.href = response.data.urlRedirect)})
}>Checkout</Button>
        </>
    )
}

export default Cart