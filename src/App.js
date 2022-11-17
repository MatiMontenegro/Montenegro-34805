import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail'
import NavBar from './components/NavBar/NavBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path='/' element={<ItemListContainer />}/>
  <Route exact path='/category/:category' element={<ItemListContainer />}/>
  <Route path='/itemdetail/:id' element={<ItemDetailContainer />}/>
  <Route path='../ItemList/Category:isOffer' element={<CartWidget/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
