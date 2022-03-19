import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Avatar, Button, Dialog, DialogTitle, FormControl, InputLabel, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import SimpleDialog from "./SimpleDialog";
import { fetchProductsStart, deleteProductStart } from "../Redux/Products/products.actions";

const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
}) 

const mapProductsState = ({ productsData }) => ({
    products: productsData.products
})


const Admin = props => {

    const { currentUser } = useSelector(mapUserState)
    const { products } = useSelector(mapProductsState)
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProductsStart())
    }, [])
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
      setSelectedValue(value);
    };

    return(
        <Grid container sx={{}}>
            <Grid item container xs={3} sx={{border:'solid 3px grey', padding:'5px'}}>
                <Grid item container alignItems='center' direction='column' xs={12} sx={{ height:200, paddingTop:5}}>
                    <Avatar item sx={{height:80, width:80}} alignSelf='center'/>
                    <h3>{currentUser.displayName}</h3>
                </Grid>
                <Grid item container xs={12} sx={{}}>
                    <Button sx={{width:'100%', background:'black', color:'white', marginBottom:'5px'}}>Home</Button>
                </Grid>
                <Grid item container xs={12} sx={{}}>
                    <Button sx={{width:'100%', background:'black', color:'white', marginBottom:'5px'}}>Profile</Button>
                </Grid>
            </Grid>
            <Grid item container xs={9} sx={{border:'solid 3px grey', padding:'10px'}}>
                <Button onClick={handleClickOpen} sx={{height:'40px', background:'black', color:'white'}} >Add Product</Button>
            </Grid>
            <Grid item xs={12}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <h1>Manage Products</h1>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        {products.map((product, index) =>{
                                            const {
                                                productName,
                                                productImageUrl,
                                                productPrice,
                                                documentID
                                            } = product
                                            return(
                                                <tr style={{background:'#d3d3d3'}}>
                                                    <td>
                                                        <img src={productImageUrl} style={{width:'100px', height:'100px'}}/>
                                                    </td>
                                                    <td>
                                                        {productName}
                                                    </td>
                                                    <td>
                                                        ${productPrice}
                                                    </td>
                                                    <td>
                                                        <Button onClick={() => dispatch(deleteProductStart(documentID))}>Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </Grid>
    )
}

export default Admin