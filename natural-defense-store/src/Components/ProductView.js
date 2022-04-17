import React from "react";
import { Box, Grid, Paper, Button, Card, CardContent, CardMedia, Typography, CardActionArea } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Image } from "mui-image";
import mango from '../images/mango-smoothie.jpg'
import green from '../images/green-smoothie.jpg'
import strawberry from '../images/strawberry-smoothie2.jpg'
import ProductOptions from "./ProductOptions";
import SelectAddOns from "./SelectAddOns";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentProduct } from "../Redux/Products/products.actions";
import { addProduct } from "../Redux/Products/products.sagas";
import { addProductToCart } from "../Redux/Cart/cart.actions";



export default function ProductView(props){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const smoothie = props.smoothie
    const handleAddToCart = (smoothie) => {
        if(!smoothie) return
        dispatch(addProductToCart(smoothie))
    }

    return(
    <Grid item md={3} xs={6} sx={{ }} >
        <Card sx={{ maxWidth: 345, minHeight: 454, pb:2, pl:2}}>
            <CardActionArea onClick={() => {
            // console.log(smoothie)
            dispatch(setCurrentProduct(smoothie))
            navigate('/customize-order')
            }}>
                <CardMedia
                component="img"
                height="325"
                image= {props.productImage ? props.productImage : green}
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {smoothie.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary"><strong> - </strong>
                    {smoothie.productIngredients.map((ingrediant, index) => {
                        return <span><strong>{`${ingrediant} - `}</strong></span>
                    })}
                </Typography>
                </CardContent>
            </CardActionArea>
            <Button onClick={() => {
            // console.log(smoothie)
            dispatch(setCurrentProduct(smoothie))
            navigate('/customize-order')
            }} sx={{backgroundColor:'black', color:'whitesmoke', '&:hover':{background: 'darkgrey', color: 'black'}}}>See Item Details</Button>
        </Card>
    </Grid>



















        // <Grid item md={3} xs={6} sx={{alignSelf:'center'}}>
        //     <Paper sx={{}} elevation={5}>
        //         <Box>
        //             <Image style={{height:'155px', width:'155px'}} src = {props.productImage ? props.productImage : green} />
        //             <Typography sx={{backgroundColor:'#03C417', textWeight:'bold'}}align='center' variant="subtitle1">
        //                 {props.productName}
        //             </Typography>
        //             <ul>
        //                 {props.productIngridients.map((ingrediant, index) => {
        //                     return <li>{ingrediant}</li>
        //                 })}
        //             </ul>
        //             {/* <ProductOptions /> */}
        //             {/* <SelectAddOns /> */}
        //         </Box>
        //     </Paper>
        // </Grid>
        
    )
}