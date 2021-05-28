import React from 'react';
import { useStateValue } from '../contextAPI/StateProvider';
import './BasketProducts.css';
import { AiOutlineDelete } from 'react-icons/ai';

const BasketProduct = (props) => {
    const { key,name,img, price} = props.product;
    const [{basket}, dispatch] = useStateValue();
    const count = props.product.count;
    const handleRemove = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            items:{
                id:key
            }
        })
        console.log('item removed')
    }
    
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-4">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-9 col-md-9 col-8">
                    <h6>{name}</h6>
                    <div className="row my-3">
                        <div className="col-lg-6 col-md-6 col-6">
                        <p> Price: $<strong>{price} </strong></p>
                        </div>
                    </div>
                    <p>Quantity: <strong>{count}</strong></p>
                    <button onClick={handleRemove} className="addToCart"> <AiOutlineDelete className="shopping__icon"/>Remove from Cart</button>
                </div>
            </div>
        </>
    );
};

export default BasketProduct;