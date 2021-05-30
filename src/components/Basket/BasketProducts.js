import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../contextAPI/StateProvider';
import BasketProduct from './BasketProduct';
import './BasketProducts.css';


const BasketProducts = () => {
    const [{basket}] = useStateValue();
    const totalPrice = basket?.reduce((amount, product) => product.price * product.count + amount, 0 );
    
    
    return (
        <div className="basket__container">
            <div className="w-75 mx-auto my-5">
            <h2 className="mb-4">Your Shopping Basket</h2>
            <div className="row basket__products ">
            <div className="col-lg-8 col-md-8 col-12">
            {
               basket?.length === 0 ? (
                   <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click 
                        "Add to basket" next to the item.
                    </p>
                    </div>
            ) : (
            <div>
                
               {
                   basket.map(pd =><BasketProduct product={pd} key={pd.key}></BasketProduct>)
               }
               </div>
               )
            }
            </div>
            <div className="col-lg-4 col-md-4 col-12">
            {basket.length > 0 && (
               <div className="checkout__right">
                   
                   <h1 className="subtotal">Subtotal</h1>
                    <p>items: {basket.length} </p>
                    <hr />
                    <div> <small>Total: $</small><strong>{totalPrice }</strong>  </div>
                    <div className="my-5">
                    <Link to="/checkout" className="Checkout mt-4" >Proceed To CheckOut</Link>
                    </div>
               </div>
           )}
        </div>
            </div>
            </div>
        </div>
    );
};

export default BasketProducts;