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
    // width: '50vw',
    // margin:'2rem',
    padding:'2rem',
    background:'#03C417',
    color:'#ffffff',
})

const Registration = props => {

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
            alert('Sign In Successful')   
    }

    return(
        !currentUser ? 
        <LoginContainer container sx={{margin: '2rem auto'}} gap={1}>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:emailColor}} >
                        {email ? '' : 'Name'}
                    </InputLabel>
                    <TextField id="email" aria-describedby="my-helper-text" value={email} onChange={getEmail}/>
                    {/* <FormHelperText id="my-helper-text">
                        We'll never share your email.
                    </FormHelperText> */}
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:emailColor}} >
                        {email ? '' : 'Email'}
                    </InputLabel>
                    <TextField id="email" aria-describedby="my-helper-text" value={email} onChange={getEmail}/>
                    {/* <FormHelperText id="my-helper-text">
                        We'll never share your email.
                    </FormHelperText> */}
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:passwordColor}}>
                        {password ? '' : 'Password'}
                    </InputLabel>
                    <TextField id="password" aria-describedby="my-helper-text" value={password} onChange={getPassword}/>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:passwordColor}}>
                        {password ? '' : 'Confirm Password'}
                    </InputLabel>
                    <TextField id="password" aria-describedby="my-helper-text" value={password} onChange={getPassword}/>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <Button sx={bg} onClick={(formSubmit)}>
                    Submit
                </Button>
            </Grid>
            {/* <Link style={{textDecoration:'none', alignSelf:'center'}} to='/register'>
                <Button sx={bg}>
                    {currentUser ? 'Logout' : 'Register'}
                </Button>
            </Link> */}
        </LoginContainer> : <Outlet />
    )
}

export default Registration