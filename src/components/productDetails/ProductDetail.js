import React, { useState } from 'react';
import './ProductaDetails.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FiCheckSquare } from 'react-icons/fi';
import { useStateValue } from '../contextAPI/StateProvider';

const ProductDetail = (props) => {
    const {name, key, category,img, star, price, stock, seller } = props.pd;

    const [count, setCount] = useState(1);
    const increase = () => {
        const incr = count + 1;
        setCount(incr)
    };
    const decrease = () => {
        if(count > 1){
            setCount(count - 1)
        }
    };

    const [{basket}, dispatch] = useStateValue();


        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item:{
                    name : name,
                    key : key,
                    img: img,
                    price: price,
                    count:count
                }
            })
        }
    
    return (
        <div className="row">
            <div className="col-lg-9 col-md-9 col-12 pd__details">
             <div className="row">
                 <div className="col-lg-6 col-md-12 col-12">
                 <img src={img} className="img-fluid pd_-details__img" alt="" />
                 </div>
                 <div className="col-lg-6 col-md-12 col-12">
                    <h6>{name}</h6>
                    <small>Category: {category}</small>
                    <br />
                    <small>Brand | {seller} </small>
                    <p><small>Stock:</small><strong> {stock}</strong></p>
                    <p><small>$</small><strong>{price}</strong></p>
                    <div className="product__rating d-flex mb-4">
                        {Array(star)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                        }
                    </div>
                    <div className="d-flex mb-3">
                            <button onClick={increase} className="increase ">+</button>
                            <h5 className="quantity">{count}</h5>
                            <button onClick={decrease} className="decrease ">-</button>
                    </div>
                    <button onClick={addToBasket} className="addToCart"> <FiShoppingCart className="shopping__icon"/> Add to Basket</button>
                 </div>
             </div>
            </div>
            <div className="col-lg-3 col-md-12 col-12 py-3 ">
                <p>Warranty</p>
                <p><FiCheckSquare className="checkMark"/> 100% Authentic</p>
                <hr />
            </div>
        </div>
    );
};

export default ProductDetail;