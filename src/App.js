import './App.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route path='/itemdetail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
