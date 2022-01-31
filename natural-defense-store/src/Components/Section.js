import React from "react";
import styled from 'styled-components'
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import { Box } from "@mui/system";

export default function Section(props){

    const { currentUser } = props
    const Section = styled.section`
        @media(max-width: 600px){
            background-color: white;
            /* outline-color: grey;
            outline-width: 20px; 
            outline-style: solid; */
            border: 5px solid grey;
            display: flex;
            justify-content: center;
            font-size: 2rem;
            color: red;
            font-weight: bold;
            text-align:center
        }

        @media(min-width: 601px){
            background-color: ;
            /* outline-color: grey;
            outline-width: 20px; 
            outline-style: solid; */
            border: .5rem solid grey;
            display: flex;
            justify-content: center;
            font-size: 4rem;
            color: red;
            font-weight: bold;
            text-align:center
        }
    `
    return(
        console.log({currentUser}),
        <Box sx={{padding:0, margin:0}}>
            <Section>
                {currentUser ? `Hello, ${currentUser.multiFactor.user.displayName}!` : 'FRESH 100% NATURAL SMOOTHIES'}
                
            </Section>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </Box>
    )
}