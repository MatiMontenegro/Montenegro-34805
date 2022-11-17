import React from 'react'
import Item from '../Item/Item';

function ItemList(props) {
  const {products} = props;
  
  return products.map((product) => 
      <Item product= {product} key={product.id}/>)
    }

export default ItemList