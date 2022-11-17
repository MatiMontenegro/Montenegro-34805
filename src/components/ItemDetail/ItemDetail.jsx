import React from 'react'
import { Button } from '@mui/material';

function ItemDetail({productSelected}) {
    return (
    <div>
        <img className='main-detail-photo' src={productSelected.photo} alt= "Main Photo"></img>
        <h1 className='detail-title'>{productSelected.title}</h1>
        <p className='product-price-detail'>{productSelected.price}</p>
        <p className='detail-description'>{productSelected.desc}</p>
        <Button>Add to cart</Button>
    </div>
    )
}

export default ItemDetail