import React, {useState, useEffect} from "react";
import { FormControl, useFormControl, InputLabel, Input, FormHelperText, TextField, Button, Paper } from "@mui/material";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/styles";
import { display } from "@mui/system";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { signInWithGoogle, signOut, auth } from '../Firebase/utils'
import { useDispatch, useSelector } from "react-redux";
import { signInUser, resetAllAuthForms } from '../Redux/User/user.actions'
import { emailSignInStart } from "../Redux/User/user.actions";
import FormControlWrapper from "../CustomHooks/FormControlWrapper";

const LoginContainer = styled(Grid)({
    display:'flex', 
    flexDirection:'column',
    justifyContent:'center',
    // width: '50vw',
    margin:'2rem auto',
    padding:'2rem',
    background:'#03C417',
    color:'#ffffff',
})

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const EmailLogin = props => {

    const { currentUser } = useSelector(mapState)
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailColor, setEmailColor] = useState('white')
    const [passwordColor, setPasswordColor] = useState('white')
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    // const { currentUser } = props

    useEffect(() => {
        if(currentUser){
            dispatch(resetAllAuthForms())
            navigate('/naturaldefensestore')
        }
    }, [currentUser])
    
    const getEmail = event =>{
        let val = event.target.value
        setEmail(val)
        setPasswordColor('white');
        setError(false)
    }

    const getPassword = event =>{
        let val = event.target.value
        setPassword(val)
        setEmailColor('white')
        setError(false)
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
         dispatch(emailSignInStart({email, password}))
    }

    return(
        !currentUser ? 
        <LoginContainer container gap={1}>
            <Grid item>
                <FormControlWrapper 
                    formControlStyle = {textFieldStyle}
                    inputLabelStyle = {{color:emailColor}}
                    textFieldType = 'email'
                    hint = 'Email'
                    value = {email}
                    handleChange = {getEmail}
                />
            </Grid>
            <Grid item>
                <FormControlWrapper 
                    formControlStyle = {textFieldStyle}
                    inputLabelStyle = {{color:passwordColor}}
                    textFieldType = 'password'
                    hint = 'Password'
                    value = {password}
                    handleChange = {getPassword}
                />
            </Grid>
            <Grid item sm={12}>
                <Button sx={bg} onClick={(formSubmit)}>
                    Login
                </Button>
            </Grid>
            <Link to='/password-reset'>
                Forgot Password?
            </Link>
            {error ? <p>Incorrect Email or Password</p> : null}
            {/* <Link style={{textDecoration:'none', alignSelf:'center'}} to='/register'>
                <Button sx={bg}>
                    {currentUser ? 'Logout' : 'Register'}
                </Button>
            </Link> */}
        </LoginContainer> : <Outlet />
    )
}

export default EmailLogin