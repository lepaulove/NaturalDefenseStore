import React from "react";
import { Grid } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import mango from '../images/pineapple.jpg'
import green from '../images/banana.jpg'
import strawberry from '../images/mango.jpg'
import { Image } from "mui-image";
import { styled } from "@mui/styles";

const Img = styled(Image)({
    // border: '7px grey solid',
    maxWidth: '20rem',
    // height:
})

export default function Section3(){

    return(
        <>
        <Box sx={{  backgroundColor:'#F69679', 
                    textAlign:'center', 
                    fontSize:'5rem', 
                    fontWeight:'bold', 
                    color:'white',
                    display: {xs:'none', md:'flex'}
                    }}>
            
            <Grid container sx={{display:'flex', justifyContent:'space-around', padding:'2rem'}}>
                <Grid item md={12}>
                    We use only the Freshest Ingredients
                </Grid>
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
        </Box>

        <Box sx={{  backgroundColor:'#F69679', 
                    textAlign:'center', 
                    fontSize:'1rem', 
                    fontWeight:'bold', 
                    color:'white',
                    display: {xs:'flex',md:'none'},
                    }}>
            
            <Grid container sx={{display:'flex', justifyContent:'space-between', padding:'2rem', paddingTop:0}}>
                <Grid item xs={12} sx={{marginBottom: '1rem'}}>
                We use only the Freshest Ingredients
                </Grid>
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
        </Box>
        </>

        
    )
}