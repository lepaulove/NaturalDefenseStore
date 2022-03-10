import userTypes from "./user.types";
import { takeLatest, call, all, put } from 'redux-saga/effects'
import { emailSignInStart, signInSuccess, signOutUserSuccess, userError, signUpUserSuccess, resetPasswordSuccess } from "./user.actions";
import { auth, getCurrentUser, handleUserProfile, GoogleProvider } from "../../Firebase/utils";
import { handleResetPasswordAPI } from "./user.helpers";

export function* getSnapshotFromUserAuth(user){
    try{
        const userRef = yield call(handleUserProfile, {userAuth: user})
        const snapshot = yield userRef.get()
        yield put(
            signInSuccess({
                id: snapshot.id,
                ...snapshot.data()
            })
        )
    }catch(err){
        // console.log(err)
    }
}

export function* emailSignIn({ payload: { email, password } }){
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
        
    }catch(err){
        // setError(true)
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)

    }catch(err){

    }
}

export function* onCheckUserSession(){
    yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser(){
    try {
        yield auth.signOut()
        yield put(signOutUserSuccess())
    }catch(err){
        console.log(err)
    }
}

export function* onSignOutUserSatrt(){
    yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser)
}

export function* signUpUser({payload: 
    { displayName, email, password, confirmPassword }
}){
    if(password != confirmPassword){
        const err = ['Passwords Do Not Match']
        yield put(userError(err)
        )
    }else{
        try{
            const { user } = yield auth.createUserWithEmailAndPassword(email, password)
            yield call(handleUserProfile, { userAuth: user, additionalData: { displayName }})
            yield put(signUpUserSuccess())
        }catch(err){
            
        }
    }  
    
}

export function* onSignUpUserStart(){
    yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser)
}

export function* resetPassword({ payload: email }){
    try{
        
       yield call(handleResetPasswordAPI, email)
       yield put(
           resetPasswordSuccess()
        )
    }catch(err){
        yield put(
            userError(err)
        )
    }
}

export function* onResetPasswordStart(){
    yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword)
}

export function* googleSignIn(){
    try {
        const { user } = yield auth.signInWithPopup(GoogleProvider)
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)
    }catch(err){

    }
}

export function* onGooglesignInStart(){
    yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn)
}

export default function* userSagas(){
    yield all([call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutUserSatrt),
        call(onSignUpUserStart),
        call(onResetPasswordStart),
        call(onGooglesignInStart)])
}