import React from "react";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  
  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, 'items');
    
    const queryshop = category
    
    ? query(queryBase, where("category", "==", category))
    : queryBase;
    getDocs(queryshop)
    .then((resp) => {
      const data = resp.docs.map((item) => {
        
        return { id: item.id, ...item.data() }
      });
      setProducts(data)
      
    })
    .catch((error) => {
      console.log(error)
    });
  }



  useEffect(() => {
    getProducts();
  }, [category]);
  
  return <div className=""> {<ItemList products={products} />} </div>
}

export default ItemListContainer