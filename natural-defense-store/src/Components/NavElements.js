import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { signOut } from "../Firebase/utils";

    const NavButton = styled(Button)({
        '&&':{
            '&&':{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
            fontWeight: 'bold',

            }
        },
        '&&:hover': {
            background: 'red'
        }
      });

export default function NavElements(props) {

    const clickEvent = () => {
        // if (props.name == 'Logout'){
            signOut()
            console.log('SIGN')
        // }
    }
    return (
        <NavButton onClick={() => {props.name == 'Logout' ? signOut() : console.log('LogIn')}}>{props.name}</NavButton>
    );
}