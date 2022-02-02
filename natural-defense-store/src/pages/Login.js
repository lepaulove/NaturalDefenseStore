import React, {useState} from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper, useMediaQuery } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display, maxWidth } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import { signInWithGoogle, signOut, auth } from '../Firebase/utils'
import { useTheme } from "styled-components";

const LoginContainer = styled(Grid)({
    display:'flex', 
    flexDirection:'column',
    justifyContent:'center',
    padding:'0 2rem 2rem 2rem',
    background:'#03C417',
    color:'#ffffff',
    width: 'fit-content',
    '& Button':{
        background:'darkgreen',
        marginTop: '1rem',
        color: 'white',
        width: '40rem',
        maxWidth: '15rem',
        alignSelf: 'center',
        '&:hover':{
            background: 'white',
            color: 'darkgreen'
        }
    }
})

function MyComponent(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
}

const Login = props => {

    const [email = '', setEmail] = useState()
    const [password = '', setPassword] = useState()
    const [emailColor = 'white', setEmailColor] = useState()
    const [passwordColor = 'white', setPasswordColor] = useState()
    const { currentUser } = props
    
    const getEmail = event =>{
        let val = event.target.value
        setEmail(val)
        setPasswordColor('white');
    }

    const getPassword = event =>{
        let val = event.target.value
        setPassword(val)
        setEmailColor('white')
    }

    const bg = {
        background:'darkgreen',
        margin: 'rem auto',
        color: 'white',
        width: '60rem',
        maxWidth: '15rem',
        alignSelf: 'center',
        '&:hover':{
            background: 'white',
            color: 'darkgreen'
        }
    }

    const textFieldStyle = {
        background: 'darkgreen',
        width: '100%',
        input:{
            color: 'white',
        }
    }
    
    const formSubmit = () =>{ 
            <>
                <div>Your Email Is: {email}</div>
                <div>Your Password Is: {password}</div>
            </>
            if(email && password){
                console.log('Email: ' + email + '\nPassword: ' + password)
            }else{
                setEmailColor('red')
                setPasswordColor('red')
                email ? console.log('Please Enter Password') : console.log('Please Enter Email Address')
            }
            
    }

    return(
        !currentUser ? 
        <Paper elevation={5} sx={{maxWidth:'fit-content', margin:'2rem auto'}}>
            <LoginContainer sx={bg} container sx={{margin: '2rem auto'}}>
                <Grid item sx={{alignSelf:'center', marginTop: 0}}sm={12}>
                    <h1>LOGIN</h1>
                </Grid>
                <Grid item sm={12}>
                    <Button  onClick={(signInWithGoogle)}>
                        Sign-In with Google
                    </Button>
                </Grid>
                <Grid item sm={12}>
                    <Link style={{textDecoration:'none', alignSelf:'center'}} to='/email-login'>
                        <Button>
                            Sign-In with Email
                        </Button>
                    </Link>
                </Grid>
                <Grid>
                    <Link style={{textDecoration:'none', alignSelf:'center'}} to='/register'>
                        <Button>
                            Register
                        </Button>
                    </Link>
                </Grid>
            </LoginContainer>
        </Paper> : <Outlet />
    )
}

export default Login