import React from "react";
import { Box, Grid, Paper, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { Image } from "mui-image";
import mango from '../images/mango-smoothie.jpg'
import green from '../images/green-smoothie.jpg'
import strawberry from '../images/strawberry-smoothie2.jpg'
import ProductOptions from "./ProductOptions";


export default function ProductView(props){
    return(
        <Grid item md={4} xs={6} sx={{alignSelf:'center'}}>
            <Paper sx={{}} elevation={5} sx={{}}>
                <Box>
                    <Image src={green}/>
                    <Typography sx={{backgroundColor:'#03C417', textWeight:'bold'}}align='center' variant="subtitle1">
                        {props.productName}
                    </Typography>
                    <ProductOptions />
                    <ProductOptions />
                </Box>
            </Paper>
        </Grid>
        
    )
}