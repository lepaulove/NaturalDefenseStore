import userTypes from "./user.types";
import { auth, handleUserProfile } from "../../Firebase/utils";
import { useNavigate } from "react-router-dom";
import { typographyClasses } from "@mui/material";

export const emailSignInStart = userCredentials => ({
    type: userTypes.EMAIL_SIGN_IN_START,
    payload: userCredentials
})

export const signInSuccess = user => ({
    type: userTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const checkUserSession = () => ({
    type: userTypes.CHECK_USER_SESSION
})

export const signOutUserStart = () => ({
    type: userTypes.SIGN_OUT_USER_START
})

export const signOutUserSuccess = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
})

export const signUpUserStart = userCredentials => ({
    type: userTypes.SIGN_UP_USER_START,
    payload: userCredentials 
})

export const userError = err => ({
    type: userTypes.USER_ERROR,
    payload: err
})

export const signUpUserSuccess = () => ({
    type: userTypes.SIGN_UP_USER_SUCCESS
})

export const resetPasswordStart = userCredentials => ({
    type: userTypes.RESET_PASSWORD_START,
    payload: userCredentials
})

export const resetPasswordSuccess = () => ({
    type: userTypes.RESET_PASSWORD_SUCCESS,
    payload: true
})

export const resetUserState = () => ({
    type: userTypes.RESET_USER_STATE
})

export const googleSignInStart = () => ({
    type: userTypes.GOOGLE_SIGN_IN_START
})















export const setCurrentUser = user => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
})

export const signInUser = ({email, password}) => async dispatch =>{
    // try{
    //     await auth.signInWithEmailAndPassword(email, password)
    //     dispatch({
    //         type: userTypes.SIGN_IN_SUCCESS,
    //         payload: true
    //     })
    // }catch(err){
    //     // setError(true)
    // } 
}

export const signUpUser = ({displayName, email, password, confirmPassword}) => async dispatch =>{
    
}

// export const resetPassword = ({ email }) => async dispatch =>{
//     const config = {
//         url: 'http://localhost:3000/email-login'
//     }
//     try{
        
//         await  auth.sendPasswordResetEmail(email, config).then(() => {
//             dispatch({
//                 type: userTypes.RESET_PASSWORD_SUCCESS,
//                 payload: true
//             })
//         }).catch(() => {
//             const err = ['Email Not Found. Please Try Again.']
//             dispatch({
//                 type: userTypes.RESET_PASSWORD_ERROR,
//                 payload: err
//             })
//         })
//         // await auth.signInWithEmailAndPassword(email, password)
//     }catch(err){
//         console.log(err)
//     }
// }


export const resetAllAuthForms = () => ({
    type: userTypes.RESET_AUTH_FORMS
})