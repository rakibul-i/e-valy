import React from 'react';
import './GiftCard.css';

const GiftCard = () => {
    return (
        <div className="gift__card">
            <div className="w-75 mx-auto my-4">
            <h2>Gift Card</h2>
            <div className="gift_card my-4">
            <div className="gift__image">
                <img src="https://evaly.com.bd/static/images/no_voucher.png" alt="" />
            </div>
            <p>Sorry, no giftCard found</p>
            </div>    
            </div>
        </div>
    );
};

export default GiftCard;