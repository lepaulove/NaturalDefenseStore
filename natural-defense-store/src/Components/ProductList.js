import React, { useEffect } from "react"
import { Box, Grid, Paper, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import { Image } from "mui-image"
import mango from '../images/mango-smoothie.jpg'
import green from '../images/green-smoothie.jpg'
import strawberry from '../images/strawberry-smoothie2.jpg'
import ProductView from './ProductView'
import { useSelector, useDispatch } from "react-redux"
import { fetchProductsStart } from "../Redux/Products/products.actions"

const mapState = ({ productsData }) => ({
    products: productsData.products
})

export default function Order(props){

    const { products } = useSelector(mapState)
    const dispatch = useDispatch()
    // const smoothies = Object.keys(props.smoothies[0])
    // console.log(props.smoothies[0][smoothies[0]])
        

    useEffect(() => {
        dispatch(fetchProductsStart())
    }, [])

    // const getProducts = () => {
    //     for(let product of props.smoothies){
    //         product
    //     }
    // }

    return(
        <Box sx={{width:'100%'}}>
            <Grid container justifyContent='space-between'>
                <Grid item xs={12}>
                    <Typography sx={{paddingTop:'2rem', color:'red', textAlign:'center', fontSize:'1.2rem', fontWeight:'bold'}}>Place an Online Order for Pick Up</Typography>
                </Grid>
                <Grid container item spacing={2} justifyContent='space-around' sx={{ pl:6, display:'flex',  margin:'1rem'}}>
                    {products.map((smoothie, index) => {
                        // if(!productName || !productImageUrl || typeof productPrice === 'undefined') return null
                        // getProducts()
                        return(
                             smoothie.productCategory === props.productCategory ? <ProductView smoothie={smoothie}/> : null
                            )
                    })}
                    {/* <ProductView productName='Green Machine'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/>
                    <ProductView productName='Another Smoothie'/> */}
                </Grid>
            </Grid>
        </Box>
        
    )
}