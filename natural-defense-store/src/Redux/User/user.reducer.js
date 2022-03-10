import { signUpUserSuccess } from "./user.actions";
import userTypes from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
    userErr: [],
    signUpUserSuccess: false,
    resetPasswordSuccess: false
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SIGN_IN_SUCCESS: 
            return {
                ...state,
                currentUser: action.payload,
                userError: []
            }
        // case userTypes.RESET_USER_STATE:
        case userTypes.SIGN_OUT_USER_SUCCESS:
            return {
                ...state,
                ...INITIAL_STATE
                
            }
        case userTypes.USER_ERROR:
            return {
                ...state,
                userErr: action.payload
            }
        case userTypes.SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                signUpUserSuccess: true
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: action.payload
            }
        case userTypes.RESET_USER_STATE:
            return {
                ...state,
                resetPasswordSuccess: false
            }
        default:
            return state
    }
}

export default userReducer