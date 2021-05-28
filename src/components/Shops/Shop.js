import React from 'react';
import './Shops.css';

const Shop = (props) => {
    const {image, name} = props.shop;
    return (
        <div className="col-lg-2 col-md-3 col-sm-6 col-12">
            <div className="card shop__card">
                <div className="image__div ">
                <img src={image} className="img-fluid shop__image" alt="" />
                </div>
                <div className="title_shop">
                <p className="shop__title">
                    {name}
                </p>
                </div>
            </div>
        </div>
    );
};

export default Shop;