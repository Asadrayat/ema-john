import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart,setCart] = useState(initialCart);
    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    console.log(products.length);
    return (
        <div className='body-ct'>
            <div className='order-container'>
                {
                    cart.map(product =><ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveItem = {handleRemoveItem}
                    ></ReviewItem> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Order;