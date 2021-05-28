import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import './ProductaDetails.css';
import ProductDetail from './ProductDetail';

const ProductsDetails = () => {
    const Id = useParams();
    const productDetails = fakeData.filter(pd => Id.Id === pd.key);
    
    return (
        <div className="products__details my-5">
            <div className="w-75 mx-auto">
               
                {
                    productDetails.map(pd => <ProductDetail pd={pd} key={pd.key} ></ProductDetail> )
                }
               
            </div>
        </div>
    );
};

export default ProductsDetails;