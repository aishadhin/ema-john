import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Body.css'

const Body = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='body'>
            <div className='left'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div></div>
        </div>
    );
};

export default Body;