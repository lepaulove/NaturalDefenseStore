import React, { useState } from "react"
import { useSelector } from "react-redux"
import { Button } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart, deleteProductFromCart } from "../Redux/Cart/cart.actions";


const mapState = ({cartData}) => ({
    cartItem: cartData.cartItems
})

const Cart = () => {
    const cartItems = useSelector(mapState)
    const dispatch = useDispatch()
    const handleRemoveFromCart = ({...product}) => {
        if(product.quantity < 2) return
        dispatch(removeProductFromCart(product))
    }
    const handleAddToCart = ({...product}) => {
        dispatch(addProductToCart(product))
    }
    const handleDeleteFromCart = ({...product}) => {
        dispatch(deleteProductFromCart(product))
    }
    let total = 0

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
                        <TableCell align="right">{item.price*item.quantity}</TableCell>
                        <TableCell align="right"><Button onClick={() => {handleDeleteFromCart(item)}}>Remove</Button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            <div style={{marginLeft:'1rem'}}>{`TOTAL: ${total}`}</div>
            <Button sx={{backgroundColor:'black', color:'white', ml:2}}>Checkout</Button>
        </>
    )
}

export default Cart