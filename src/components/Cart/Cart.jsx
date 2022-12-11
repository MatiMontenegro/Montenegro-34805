import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from "react";
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import swal from 'sweetalert2'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();


    const order = {
        buyer: {
            name: 'Mati',
            email: 'montenegro.matias@gmail.com',
            phone: '1165930792',
            address: 'gral pico 7, BSAS'
        },
        items: cart.map(product => ({ id: product.id, name: product.title, price: product.price, quantity: product.stock })),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'order');
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
        swal.fire({
            title: '¡Compra Exitosa!'
        });
    }

    if (cart.length === 0) {
        return (
            <>
                <p className="">No hay elementos en el carrito.</p>
                <Link to='/' className=''>Hacer compras</Link>
            </>
        );
    }

    return (
        <>
            <div className=''>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }

            </div>
            <div className=''>
                <p>
                    TOTAL: ${totalPrice()}
                </p>
                <button onClick={handleClick} className="">Emitir Compra</button>
            </div>
        </>
    )
}

export default Cart;