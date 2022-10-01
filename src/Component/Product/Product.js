import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    const { name, img, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='p-info'>
                <p className='p-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Manufacturer : {seller}</small></p>
                <p><small>Rating : {ratings} star</small></p>
            </div>
            <div ><button onClick={ () =>handleAddToCart(product)}  className='p-btn'><h3>Add To Cart</h3></button></div>
        </div>
    );
};

export default Product;