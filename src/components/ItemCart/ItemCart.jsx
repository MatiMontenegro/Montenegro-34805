import React from "react";
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (

<div className="card w-96 bg-base-100 shadow-xl">
<img src={product.photo} alt={product.title}/>
<div className="card-body">
    <h2 className="card-title">Título: {product.title}</h2>
    <p>Cantidad: {product.quantity}</p>
    <p>Precio por unidad: ${product.price}</p>
      <p>Subtotal: ${product.quantity * product.price}</p>
    <p>Cantidad: {product.quantity}</p>
    <div>
    <button onClick={() => removeProduct(product.id)} className="btn btn-primary">Eliminar</button>
    </div>
</div>
</div>
)
}

export  default ItemCart;