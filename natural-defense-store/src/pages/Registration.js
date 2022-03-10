import React, {useState, useEffect} from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper, Alert } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display } from "@mui/system";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAuthForms, signUpUser, signUpUserStart, signUpUserSuccess } from "../Redux/User/user.actions";

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

const mapState = ({ user }) => ({
    signUpUserSuccess: user.signUpUserSuccess,
    userError: user.userError
})

const Registration = props => {

    const {signUpUserSuccess, userError} = useSelector(mapState)
    const redirect = false
    const dispatch = useDispatch()
    const [displayName = '', setDisplayName] = useState()
    const [email = '', setEmail] = useState()
    const [password = '', setPassword] = useState()
    const [confirmPassword = '', setConfirmPassword] = useState()
    const [emailColor = 'white', setEmailColor] = useState()
    const [passwordColor = 'white', setPasswordColor] = useState()
    const [errors, setErrors ] = useState([])
    const [redirectUser = false, setRedirectUser] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(signUpUserSuccess){
            console.log('redirecting user...')
            navigate('/email-login')
            dispatch(resetAllAuthForms())
        }
    }, [signUpUserSuccess])

    useEffect(() => {
        if(Array.isArray(userError) && userError.length > 0){
            
        }
    }, [userError])

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
    
    const formSubmit = event =>{ 
        event.preventDefault()
        // console.log(signUpUserSuccess)
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }))
    }

    return(
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
                    <TextField
                        type='password' 
                        id="confirm" 
                        aria-describedby="my-helper-text" 
                        value={confirmPassword} 
                        onChange={getConfirmPassword}/>
                </FormControl>
            </Grid>
            <Grid item sm={12}>
                <Button sx={bg} onClick={(formSubmit)}>
                    Submit
                </Button>
                <p style={{color:'red', fontWeight:'bold'}}>{userError[0]}</p>
            </Grid>
            {/* <Link style={{textDecoration:'none', alignSelf:'center'}} to='/register'>
                <Button sx={bg}>
                    {currentUser ? 'Logout' : 'Register'}
                </Button>
            </Link> */}
        </LoginContainer>
    )
}

export default Registration