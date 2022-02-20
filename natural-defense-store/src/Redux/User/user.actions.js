import userTypes from "./user.types";
import { auth, handleUserProfile } from "../../Firebase/utils";
import { useNavigate } from "react-router-dom";
import { typographyClasses } from "@mui/material";

export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const signInUser = ({email, password}) => async dispatch =>{
    try{
        await auth.signInWithEmailAndPassword(email, password)
        dispatch({
            type: userTypes.SIGN_IN_SUCCESS,
            payload: true
        })
    }catch(err){
        // setError(true)
    } 
}

export const signUpUser = ({displayName, email, password, confirmPassword}) => async dispatch =>{
    if(password !== confirmPassword){
        const err = ['Passwords Do Not Match']
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            payload: err
        })
        return
    }  

    try{
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        await handleUserProfile(user, { displayName })
        dispatch({
            type: userTypes.SIGN_UP_SUCCESS,
            payload: true
        })
        // setRedirectUser(true)
    }catch(err){
        console.log(err)
    }
}

export const resetPassword = ({ email }) => async dispatch =>{
    const config = {
        url: 'http://localhost:3000/email-login'
    }
    try{
        
        await  auth.sendPasswordResetEmail(email, config).then(() => {
            dispatch({
                type: userTypes.RESET_PASSWORD_SUCCESS,
                payload: true
            })
        }).catch(() => {
            const err = ['Email Not Found. Please Try Again.']
            dispatch({
                type: userTypes.RESET_PASSWORD_ERROR,
                payload: err
            })
        })
        // await auth.signInWithEmailAndPassword(email, password)
    }catch(err){
        console.log(err)
    }
}

export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})