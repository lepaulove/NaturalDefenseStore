import { Button } from "@mui/material";
import React from "react";
import { signOut } from "../Firebase/utils";
import { useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../Redux/User/user.actions";

const UserAccount = props => {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(signOutUserStart())
    }

    const mapState = ({ user }) => ({
        currentUser: user.currentUser
    })

    const { currentUser } = useSelector(mapState)
    console.log(props)
    return(
        <div>
            <h1>
            {currentUser.displayName}'s Natural Defense Store Account
            
        </h1>
        <Button onClick={logout}>Logout</Button>
        </div>
        
    )
}

export default UserAccount