import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { checkUserIsAdmin } from "../utils"

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {

    const { currentUser } = useSelector(mapState)
    console.log(mapState)
    const  isAdmin = checkUserIsAdmin(currentUser)

    if(!isAdmin) return null

    return(
        <div style={{width: '100%', height:'40px'}}>
            <Link to='/login'><button>ADMIN TOOLBAR</button></Link>
        </div>
    )
}

export default AdminToolbar