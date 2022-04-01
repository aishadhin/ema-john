import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Body.css'

const Body = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='body'>
            <div className='left'>
                {
                    products.map(product => <Product addtocart={addToCart} product={product} key={product.id}></Product>)
                }
            </div>
            <div>
                <h3>Cart</h3>
                <p>Added product: {cart.length}</p>
            </div>
        </div>
    );
};

export default Body;