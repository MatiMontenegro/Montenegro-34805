import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


function NavBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <CartWidget />
          <img className='dogllar-logo' src='https://www.dogllar.com.ar/img/logos/colorlogotransparent.png' alt="dogllar logo" />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
            >
              
            <MenuItem>
            <Button><Link to='/'>Home</Link></Button>
            </MenuItem>
            <MenuItem>
            <Button><Link to='/category/dogs'>Dogs</Link></Button>
            </MenuItem>
            <MenuItem>
            <Button><Link to='/category/cats'>Cats</Link></Button>
            </MenuItem>
            <MenuItem>
            <Button><Link to='/cart'>Cart</Link></Button>
            </MenuItem>
            
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
