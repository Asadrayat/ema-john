import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, img, seller, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='p-info'>
                <p className='p-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <div ><button onClick={ () => props.handleAddToCart(props.product)}  className='p-btn'><h3>Add To Cart</h3></button></div>
        </div>
    );
};

export default Product;