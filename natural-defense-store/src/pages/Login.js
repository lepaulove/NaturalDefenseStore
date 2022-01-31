import React, {useState} from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import { signInWithGoogle, signOut, auth } from '../Firebase/utils'

const LoginContainer = styled(Grid)({
    display:'flex', 
    flexDirection:'column',
    justifyContent:'center',
    padding:'2rem',
    background:'#03C417',
    color:'#ffffff',
})

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
        marginTop: 1,
        color: 'white',
        width: '100%',
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
        <LoginContainer container sx={{margin: '2rem auto'}}>
            
            <Grid item sm={12}>
                <Button sx={bg} onClick={(signInWithGoogle)}>
                    Login with Google
                </Button>
            </Grid>
            <Grid item sm={12}>
                <Link style={{textDecoration:'none', alignSelf:'center'}} to='/email-login'>
                    <Button sx={bg}>
                        Login with Email
                    </Button>
                </Link>
            </Grid>
            <Grid>
                <Link style={{textDecoration:'none', alignSelf:'center'}} to='/register'>
                    <Button sx={bg}>
                        Register
                    </Button>
                </Link>
            </Grid>
        </LoginContainer> : <Outlet />
    )
}

export default Login