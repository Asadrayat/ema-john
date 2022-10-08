import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import  './ReveiwItem.css'
const ReviewItem = ({ product ,handleRemoveItem }) => {
    const {id, name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="reviw-details-container">
                <div className="review-details">
                    <p>name : {name}</p>
                    <p><small>Price : ${price}</small></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-item">
                    <button onClick={() => handleRemoveItem(id)}> <FontAwesomeIcon className='delete-btn' icon={faTrashAlt}></FontAwesomeIcon> </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;