import React from "react";
import { Grid } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import child from '../images/child.jpg'
import { Image } from "mui-image";
import { styled } from "@mui/styles";

const Img = styled(Image)({
    // border: '7px grey solid',
    // maxWidth: '20rem',
    // height:
})

export default function Section4(){

    return(
        <Box sx={{  backgroundColor:'#F0F1F4', 
                    textAlign:'center',  
                    fontWeight:'bold', 
                    color:'red',
                    }}>
            <Grid container sx={{display:{xs:'none', md:'flex'}, flexDirection:'row', justifyContent:'space-around', padding:'2rem', fontSize:'4rem'}}>
                <Grid item sx={{alignSelf:'flex-start'}} sm={6}>
                    <Image src={child}/>
                </Grid>
                <Grid item sx={{alignSelf:'flex-end'}} sm={6}>
                    <h2 xs={{display:{md:'flex', lg:'none'}}}>KIDS LOVE THEM TOO!</h2>
                </Grid>
            </Grid>

            <Grid container sx={{display:{xs:'flex', md:'none'}, flexDirection:'row', justifyContent:'space-around', fontSize:'1.8rem'}}>
                <Grid item sx={{alignSelf:'flex-start', padding:'1rem'}} sm={12}>
                    <Image src={child}/>
                </Grid>
                <Grid item sx={{alignSelf:'flex-end', padding:0,}} sm={12}>
                    <h3 xs={{display:{md:'flex', lg:'none'}}}>KIDS LOVE THEM TOO!</h3>
                </Grid>
            </Grid>
        </Box>
    )
}