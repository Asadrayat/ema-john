import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, clearCart, children } = props;
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = product.price + total;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = shipping + total + tax;
    // console.log(cart);
    return (
        <div className='cart'>
            <h1>Summery</h1>
            <h3>Selected Item : {cart.length}</h3>
            <h4>Total Price : ${total} </h4>
            <h4>Total Shipping Charges : ${shipping}</h4>
            <h4>Tax : ${tax} </h4>
            <h3>Grand Total : {grandTotal}</h3>
            {/* <button onClick={clearCart}>Clear Cart</button> */}
            {children}
        </div>
    );
};

export default Cart;