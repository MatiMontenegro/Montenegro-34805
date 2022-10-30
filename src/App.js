import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App({saludo}) {

  return (
    <div>
  <NavBar />
  <ItemListContainer greeting={saludo} />
    </div>
  );
}

export default App;
