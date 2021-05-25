import React from 'react';
import Header from '../Header/Header';
import Navigation from '../navigation/Navigation';
import TopHeader from '../topHeader/TopHeader';

const HeaderMain = () => {
    return (
        <div>
            <TopHeader/>
           <Header/>
           <Navigation/>
        </div>
    );
};

export default HeaderMain;