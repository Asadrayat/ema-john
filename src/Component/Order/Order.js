import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();
    console.log(products.length);
        return (
        <div>
            <h1>This is Order :{products.length}</h1>
        </div>
    );
};

export default Order;