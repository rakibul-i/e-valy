import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    var {name, price, img, key} = props.pd;
    var name1 = name.slice(0, 50);
    const Id = key;
    return (
        <div className="col-lg-2 col-md-3 col-4">
            <Link  to={`${Id}`} className="card product__detail">
              
                <img className="product__image" src={img} alt="" />
                <p className="product__name">{name1}..</p>
                <p><small>$</small><strong>{price}</strong> </p>
               
            </Link>
        </div>
    );
};

export default Product;