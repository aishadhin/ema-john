import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id,category,img,name,price} = props.product
    console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{id}</p>
            <h4>Price: ${price}</h4>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;