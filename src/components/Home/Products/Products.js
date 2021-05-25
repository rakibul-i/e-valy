import React from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../../fakeData/index'
import Product from '../Product/Product';
const Products = () => {
    const fakedata = fakeData.slice(0, 12);
    
    return (
        <div className="Products__container">
            <div className="w-75 mx-auto">
            <div className="d-flex my-2 p-y-2 justify-content-between align-items-center">
            <h3 className="my-3 pt-2">Products</h3>
            <Link to="/allProducts " className="brands" >View All</Link>
            </div>
            <div className="row py-3">
               {
                   fakedata.map(pd => <Product pd={pd} key={pd.key} ></Product> )
               }
            </div>
            </div>
        </div>
    );
};

export default Products;