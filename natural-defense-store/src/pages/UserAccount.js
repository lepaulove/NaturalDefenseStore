import { Button } from "@mui/material";
import React from "react";
import { signOut } from "../Firebase/utils";

const UserAccount = props => {

    const logout = () => {
        signOut()
    }

    const { currentUser } = props
    console.log(props)
    return(
        <div>
            <h1>
            {props.currentUser.displayName}'s Natural Defense Store Account
            
        </h1>
        <Button onClick={logout}>Logout</Button>
        </div>
        
    )
}

export default UserAccount