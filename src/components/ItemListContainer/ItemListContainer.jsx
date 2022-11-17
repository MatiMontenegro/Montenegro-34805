import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {data} from '../Data/Data';

function ItemListContainer() {
  // const saludo = 'Bienvenidos a Dogllar, Seguridad para tu compañero';

  const {category} = useParams();
  const [products, setProducts] = useState([]);
  
  /* --------------------------------- */
  const getProducts = new Promise((res,rej) =>{
    setTimeout(()=>{
      res(data)
    }, 1000)
  })

  /* -------------------------------- */
  useEffect(() =>{
    getProducts.then((res) => {
      if(category){
      setProducts(res.filter((data) => data.category === category))
    } else {
      setProducts(res)
  }});
  setTimeout(() =>{
  },1000)
}, [category] );
  
  // useEffect(() => {
  //   fetch ('mock/products.json')
  //   .then(response => response.json())
  //   .then(data => setProducts(data))
  //   .catch(error => console.error('Error:', error));
  //   },[3000]);

  return (    
      <div>
        {/* <p className='saludo' saludo={saludo}>{saludo}</p> */}
        <ItemList products={products}></ItemList>
      </div>
    )
}
export default ItemListContainer