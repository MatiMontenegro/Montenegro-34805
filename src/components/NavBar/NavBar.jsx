import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


function NavBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CartWidget />
          <img className='dogllar-logo' src='https://www.dogllar.com.ar/img/logos/colorlogotransparent.png' alt="dogllar logo" />
          <Button><NavLink to='/'>Home</NavLink></Button>
          <Button><NavLink to='/category/dogs'>Para Caninos</NavLink></Button>
          <Button><NavLink to='/category/cats'>Para Felinos</NavLink></Button>
          <Button><NavLink to='/cart'>Mi Carrito</NavLink></Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
