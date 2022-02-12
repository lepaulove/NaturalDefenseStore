import React from "react";
import { Box, Grid, Paper, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Image } from "mui-image";
import mango from '../images/mango-smoothie.jpg'
import green from '../images/green-smoothie.jpg'
import strawberry from '../images/strawberry-smoothie2.jpg'
import Item from './ProductView'

export default function Order(){
    return(
        <Box>
            <Grid container justifyContent='center'>
                <Grid item xs={12}>
                    <Typography variant="h3" sx={{paddingTop:'3rem', color:'red', textAlign:'center'}}>Place an Online Order for Pick Up</Typography>
                </Grid>
                <Grid container item spacing={5} justifyContent='space-between' sx={{padding:'0rem 1rem 0rem 1rem', margin:'1rem'}}>
                    <Item productName='Green Machine'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                    <Item productName='Some Other Smoothie'/>
                </Grid>
            </Grid>
        </Box>
        
    )
}