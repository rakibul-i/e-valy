import React from 'react';
import Brands from '../Brands/Brands';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <HeaderMain/>
           <Brands/>
           <Products/>
           <Footer/>
        </div>
    );
};

export default Home;