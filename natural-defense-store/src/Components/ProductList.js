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

    useEffect(() => {
        dispatch(fetchProductsStart())
    }, [])

    return(
        <Box sx={{width:'80%', margin:'0 auto'}}>
            <Grid container justifyContent='space-between'>
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{paddingTop:'3rem', color:'red', textAlign:'center'}}>Place an Online Order for Pick Up</Typography>
                </Grid>
                <Grid container item spacing={5} justifyContent='space-between' sx={{display:'flex',  margin:'1rem'}}>
                    {products.map((product, index) => {
                        const {
                            productName,
                            productImageUrl,
                            productType,
                        } = product
                        return(
                            productType == props.productType ? <ProductView productName={productName} productImage={productImageUrl}/> : null
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