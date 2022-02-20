import React from "react";
import { Box, Grid, Paper, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Image } from "mui-image";
import mango from '../images/mango-smoothie.jpg'
import green from '../images/green-smoothie.jpg'
import strawberry from '../images/strawberry-smoothie2.jpg'
import ProductView from './ProductView'

export default function Order(){
    return(
        <Box sx={{width:'80%', margin:'0 auto'}}>
            <Grid container justifyContent='space-between'>
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{paddingTop:'3rem', color:'red', textAlign:'center'}}>Place an Online Order for Pick Up</Typography>
                </Grid>
                <Grid container item spacing={5} justifyContent='space-between' sx={{display:'flex',  margin:'1rem'}}>
                    <ProductView productName='Green Machine'/>
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
                    <ProductView productName='Another Smoothie'/>
                </Grid>
            </Grid>
        </Box>
        
    )
}