import React, { useState, useEffect } from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display } from "@mui/system";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { signInWithGoogle, signOut, auth } from '../Firebase/utils'
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, resetAllAuthForms } from "../Redux/User/user.actions";

const LoginContainer = styled(Grid)({
    display:'flex', 
    flexDirection:'column',
    justifyContent:'center',
    // width: '50vw',
    margin:'2rem auto',
    padding:'0 2rem 2rem 2rem',
    background:'#03C417',
    color:'#ffffff',
})

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
})

const ForgotPassword = props => {

    const {resetPasswordSuccess, resetPasswordError} = useSelector(mapState)
    const dispatch = useDispatch()
    const [email = '', setEmail] = useState()
    const [emailColor = 'white', setEmailColor] = useState()
    let navigate = useNavigate()
    const { currentUser } = props
    
    useEffect(() =>{
        if(resetPasswordSuccess){
            dispatch(resetAllAuthForms())
            navigate('/email-login')
        }
    }, [resetPasswordSuccess])

    useEffect(() =>{
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0){
            
        }
    }, [resetPasswordError])

    const getEmail = event =>{
        let val = event.target.value
        setEmail(val)
        setEmailColor('white');
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
    
    const formSubmit = event =>{ 
          dispatch(resetPassword({email}))
    }

    return(
        !currentUser ? 
        <LoginContainer container gap={1}>
            <Grid item sx={{alignSelf:'center', marginTop: 0}}sm={12}>
                <h1>Reset Password</h1>
            </Grid>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:emailColor}} >
                        {email ? '' : 'Email'}
                    </InputLabel>
                    <TextField type='email' id="email" aria-describedby="my-helper-text" value={email} onChange={getEmail}/>
                    {/* <FormHelperText id="my-helper-text">
                        We'll never share your email.
                    </FormHelperText> */}
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <Button sx={bg} onClick={(formSubmit)}>
                    Send Link
                </Button>
                <p style={{color:'red', fontWeight:'bold'}}>{resetPasswordError[0]}</p>
            </Grid>
        </LoginContainer> : <Outlet />
    )
}

export default ForgotPassword