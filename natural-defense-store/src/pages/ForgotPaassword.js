import React, {useState} from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display } from "@mui/system";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut, auth } from '../Firebase/utils'


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

const ForgotPassword = props => {

    const [email = '', setEmail] = useState()
    const [emailColor = 'white', setEmailColor] = useState()
    let navigate = useNavigate()
    const { currentUser } = props
    
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
    
    const formSubmit = async event =>{ 
        
        try{
            const config = {
                url: 'http://localhost:3000/email-login'
            }
            await  auth.sendPasswordResetEmail(email, config).then(() => {
                navigate('/email-login')
            }).catch(() => {

            })
            // await auth.signInWithEmailAndPassword(email, password)
        }catch(err){
            console.log(err)
        }  
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
            </Grid>
        </LoginContainer> : <Outlet />
    )
}

export default ForgotPassword