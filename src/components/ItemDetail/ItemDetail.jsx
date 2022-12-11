import React from 'react'
import { useState } from 'react';
import { Button } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

function ItemDetail({data}) {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
    <div>
        <img className='main-detail-photo' src={data.photo} alt= "Product"></img>
        <h1 className='detail-title'>{data.title}</h1>
        <p className='product-price-detail'>{data.price}</p>
        <p className='detail-description'>{data.desc}</p> 
        {
            goToCart
            ? 
            <div>
            <div><Link to='/cart' className=''>Ver mi carrito</Link></div>
            <div><Link to='/' className=''>Seguir comprando</Link></div>
            </div>
            : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
            } 
    </div>
    )
}

export default ItemDetail