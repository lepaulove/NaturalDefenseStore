import React, {useState} from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper, Alert } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display } from "@mui/system";
import { Link, Outlet } from "react-router-dom";
import { auth, handleUserProfile} from '../Firebase/utils'

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

    const [displayName = '', setDisplayName] = useState()
    const [email = '', setEmail] = useState()
    const [password = '', setPassword] = useState()
    const [confirmPassword = '', setConfirmPassword] = useState()
    const [emailColor = 'white', setEmailColor] = useState()
    const [passwordColor = 'white', setPasswordColor] = useState()
    const [errors, setErrors ] = useState([])
    const [redirectUser = false, setRedirectUser] = useState()
    const { currentUser } = props
    
    
    const handleChange = (event, field) =>{
        if(field === 'name'){
            let val = event.target.value
            setDisplayName(val)
        }
    }

    const getDisplayName = event =>{
        let val = event.target.value
        setDisplayName(val)
        // setPasswordColor('white');
    }

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

    const getConfirmPassword = event =>{
        let val = event.target.value
        setConfirmPassword(val)
        // setEmailColor('white')
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
        event.preventDefault()
        if(password !== confirmPassword){
            alert('Password Do Not Match')
            return
        }  

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await handleUserProfile(user, { displayName })
            setRedirectUser(true)
        }catch(err){
            console.log(err)
        }
    }

    return(
        !redirectUser ? 
        <LoginContainer container sx={{margin: '2rem auto'}} gap={1}>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:emailColor}} >
                        {displayName ? '' : 'Name'}
                    </InputLabel>
                    <TextField type='text' id="name" aria-describedby="my-helper-text" value={displayName} onChange={getDisplayName}/>
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
                    <TextField type='email' id="email" aria-describedby="my-helper-text" value={email} onChange={getEmail}/>
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
                    <TextField type='password' id="password" aria-describedby="my-helper-text" value={password} onChange={getPassword}/>
                </FormControl>
            </Grid>
            <Grid item>
                <FormControl sx={textFieldStyle}>
                    <InputLabel htmlFor="my-input" sx={{color:passwordColor}}>
                        {confirmPassword ? '' : 'Confirm Password'}
                    </InputLabel>
                    <TextField type='password' id="confirm" aria-describedby="my-helper-text" value={confirmPassword} onChange={getConfirmPassword}/>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <Button sx={bg} onClick={(formSubmit)}>
                    Submit
                </Button>
                <div>
                    <p>Name: {displayName}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            </Grid>
            {
                errors.length >= 0 && (
                    errors.map((error, index) => {
                        <li key={index}>
                            {error}
                        </li>
                    })
                )
            }
            {/* <Link style={{textDecoration:'none', alignSelf:'center'}} to='/register'>
                <Button sx={bg}>
                    {currentUser ? 'Logout' : 'Register'}
                </Button>
            </Link> */}
        </LoginContainer> : <Outlet />
    )
}

export default Registration