import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id,category,img,name,price} = props.product;
    const {addtocart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{category}</p>
            <p>{id}</p>
            <h4>Price: ${price}</h4>
            <button onClick={() =>addtocart(props.product)}>Add to cart</button>
        </div>
    );
};

export default Product;