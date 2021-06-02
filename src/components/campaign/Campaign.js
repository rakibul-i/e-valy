import React from 'react';
import './campaign.css';

const Campaign = () => {
    return (
        <div className="campaign">
            <div className="w-75 mx-auto my-4">
            <h2>Campaigns</h2>
            <div className="campaign__card my-4">
            <div className="campaign__image">
                <img src="https://evaly.com.bd/static/images/no_voucher.png" alt="" />
            </div>
            <p>Sorry, There is no campaign at this time</p>
            </div>    
            </div>
        </div>
    );
};

export default Campaign;