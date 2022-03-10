import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import NavElements from './NavElements'
import { styled } from '@mui/system';

const pages = [{name:'Order Smoothie Online', route:'/order'}, {name1:'Atomy Products', route:'/atomy'}, {name2:'Vitamins and Suppliments', route:'/vitamins'}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = props => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRoute = () => {
    navigate('/my-account')
    handleCloseNavMenu()
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const NavContainer = styled(AppBar)({
      backgroundColor: '#03c417'
  })

  const Links = styled(Link)({
      '&&':{
          textDecoration: 'none'
        },
        
  })

  const { currentUser } = props

  return (
    <NavContainer position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            color='#FA4720'
          >
            NDS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Links to='/naturaldefensestore'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Links>
                <Links to='/order'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Order Smoothie Onlne</Typography>
                  </MenuItem>
                </Links>
                <Links to='/atomy'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Atomy Products</Typography>
                  </MenuItem>
                </Links>
                <Links to='/vitamins'>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Vitamins & Suppliments</Typography>
                  </MenuItem>
                </Links>
                <MenuItem onClick={handleRoute}>
                  {currentUser ? <Typography textAlign="center">My Account</Typography> : 
                  <Links to='/login'><Typography>Login</Typography></Links>}
                </MenuItem> 
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            color='#FA4720'
          >
            NDS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'space-around' }}>
                <Links to='/naturaldefensestore'><NavElements name='Home'></NavElements></Links>
                <Links to='/order'><NavElements name='Order Smoothies Online'></NavElements></Links>
                <Links to='/atomy'><NavElements name='Atomy Products'></NavElements></Links>
                <Links to='/vitamins'><NavElements name='Vitimans & Suppliments'></NavElements></Links>
                {currentUser ? <NavElements name='My Account'></NavElements> : 
                <Links to='/login'><NavElements name='Login'></NavElements></Links>}

            {/* {pages.map((page) => (
              <Link to={page.route}><Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button></Link>
            ))} */}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </NavContainer>
  );
};
export default ResponsiveAppBar;






// import React from "react";
// import styled from "styled-components";
// import NavElements from "./NavElements";
// import { NavLink, Link } from 'react-router-dom'
// import { Grid } from "@mui/material";
// import { Box } from "@mui/system";

// const Div = styled.div`
//     background-color: #03c417;
//     margin-top: -2rem;
//     display: flex;
//     justify-content: space-around;
//     align-items: space-between;
//     padding: .5rem;
// `

// export default function Navigation(){
//     return(
//         <Div>
//             <Grid container>
//                 <Grid item lg={3} xs={12}><Link to='/'><NavElements component={ Link } to='/' name='Home'></NavElements></Link></Grid>
//                 <Grid item lg={3} xs={12}><Link to='/order'><NavElements component={ Link } to='/order' name='Order Smoothie Online'></NavElements></Link></Grid>
//                 <Grid item lg={3} xs={12}><Link to='/atomy'><NavElements name='Atomy Products'></NavElements></Link></Grid>
//                 <Grid item lg={3} xs={12}><Link to='/vitamins'><NavElements name='Vitimans & Suppliments'></NavElements></Link></Grid>
//             </Grid>
            
            
//         </Div>
//     )
// }