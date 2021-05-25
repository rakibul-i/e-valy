import React from 'react';
import './Brands.css';


const Brand = (props) => {
    const {image, name} = props.brand;
    return (
        <div className="col-lg-2 col-md-3">
            <div className="card brand__card">
                <img src={image} alt="" />
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Brand;