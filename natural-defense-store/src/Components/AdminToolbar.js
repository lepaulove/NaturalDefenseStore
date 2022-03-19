import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { checkUserIsAdmin } from "../utils"

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material'

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const AdminToolbar = props => {

    const { currentUser } = useSelector(mapState)
    console.log(mapState)
    const  isAdmin = checkUserIsAdmin(currentUser)

    // const handleOpenNavMenu = event => {
    //     setAnchorElNav(event.currentTarget)
    // }

    // const handleCloseNavMenu = event => {
    //     setAnchorElNav(null)
    // }

    if(!isAdmin) return null

    return(
        <AppBar position='static' sx={{background: 'black'}}>
            <Container maxWidth='xl' >
                <Toolbar >
                <Button sx={{background: 'white', color: 'black', textWeight:'bold'}}><Link to='/admin' style={{textDecoration:'none'}}>My Admin</Link></Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default AdminToolbar