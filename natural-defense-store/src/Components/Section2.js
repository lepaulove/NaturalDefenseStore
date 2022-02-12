import React from "react";
import { Grid } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import mango from '../images/mango-smoothie.jpg'
import green from '../images/green-smoothie.jpg'
import strawberry from '../images/strawberry-smoothie2.jpg'
import { Image } from "mui-image";
import { styled } from "@mui/styles";

const Img = styled(Image)({
    // border: '7px grey solid',
    maxWidth: '20rem',
    // height:
})

export default function Section2(){

    return(
        <>
        <Grid container sx={{display:{xs:'none', md:'flex'}, justifyContent:'space-around', backgroundColor:'#F0F1F4', padding:'2rem'}}>
            <Grid item>
                <Img src={mango}/>
            </Grid>
            <Grid item >
                <Img src={green}/>
            </Grid>
            <Grid item > 
                <Img src={strawberry}/>
            </Grid>
        </Grid>

        <Grid container sx={{display:{xs:'flex', md:'none'}, justifyContent:'space-around', backgroundColor:'#F0F1F4', padding:'2rem'}}>
            <Grid item xs={3}>
                <Img src={mango}/>
            </Grid>
            <Grid item xs={3}>
                <Img src={green}/>
            </Grid>
            <Grid item xs={3}> 
                <Img src={strawberry}/>
            </Grid>
        </Grid>
        
        </>
    )
}