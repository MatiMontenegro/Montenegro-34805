import React,{useEffect, useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]  = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <>

            <button disabled={count <= 1} onClick={decrease} className="">-</button>

            <span>{count}</span>

            <button disabled={count >= stock} onClick={increase} className="">+</button>


            <button disabled={stock <=0} onClick={() => onAdd(count)} className="">Agregar al carrito</button>

        </>
    )
}

export default ItemCount;