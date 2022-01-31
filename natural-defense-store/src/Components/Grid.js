import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import { styled } from "@mui/styles";
const Item = styled(Paper)({
        '&&': {background: 'blue',}
    })
export default function GridP(){
    
    return(
        <div>
            <Grid container rowSpacing={2}>
                <Grid item sm={6}>
                    <Item>SMALL</Item>
                </Grid>
                <Grid item sm={6}>
                    <Item>SMALL</Item>
                </Grid>
                <Grid item sm={4}>
                    <Item>SMALL</Item>
                </Grid>
                <Grid item sm={4}>
                    <Item>SMALL</Item>
                </Grid>
                <Grid item sm={4}>
                    <Item>SMALL</Item>
                </Grid>
            </Grid>
            {/*************************************************************************/}
            <Grid container spacing={20}>
                
            </Grid>
        </div>
    )
}