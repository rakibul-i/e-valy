import React from 'react';
import Shop from './Shop';

const Shops = () => {
    const shopsDetails = [
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/2ae1b5de5f92-sky-sra-photoshop-silver-2.jpg',
            name:'SKY SEA SHOES'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/2f05303436d2-sfg.jpg',
            name: 'Safwaan Fashion Gallery'
        },
        {
            image:'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/272a97796567-hero.png',
            name: 'Evaly Hero Official Store'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/b50da8ba8b47-0dbee6a472f0-toggi-paper.jpg',
            name: 'Toggi Paper for Mega SME Deal'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/76d6b3547f94-7a531c8ebcf7-b45b4da4267a-c48484db76c7-tvs-auto-bangladesh.png',
            name: 'Tvs Auto Bangladesh Ltd',
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/36fa58ebb195-815136b4b9da-e15d91f440f2-abs-cables-ltd.jpg',
            name: 'ABS CABLES LTD for Mega SME Deal'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/70fa1b3b855b-d67ef96a4cb1-4aa1992bec3c-al-haramain.jpg',
            name: 'Al Haramain Perfume for Mega SME Deal'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/931500f65538-a4523af6139e-fb_img_1617659060804.jpg',
            name: 'Nutrinix Limited for Mega SME Deal',
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/d57c6b377bad-84665c23f36e-rani-food-industries.png',
            name: 'Roni food industries for Mega SME Deal'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/5cb5c0ac899e-image.jpg',
            name: 'MAK CREATIVE',
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/80f0ac04fb6c-feni.png',
            name: 'Evaly Express Feni Sadar 5, Feni'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/watermarked/2018-12-18_103131.16930937.jpg',
            name: 'Smart Gadget',
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/493042b46455-sports-one-logo-96px.png',
            name: 'SPORTS ONE'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/6f9410ca313d-image.jpg',
            name: 'KS'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/71b21ca97c8b-nayon-telecom-logo-new.jpg',
            name: 'Nayon Telecom',
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/99497405d955-cover.jpg',
            name: 'ezadu.com.bd'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/2019-05-19_100253.09243311.png',
            name: 'Early Shop'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/0a2611c84fc2-logo.png',
            name: 'Novel Hovel'
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/416679c4cc92-1e0e05b1-b629-4749-8c30-1d21173d8ebb.jpg',
            name: 'QuickBazarBD',
        },
        {
            image: 'https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/10e39b90b33a-image.jpg',
            name: 'Unique Clothing BD'
        }
    ]
    return (
        <div className="shops__container">
            <div className="w-75 mx-auto my-4">
                <h2>Shops</h2>
                <div className="row my-3">
                    {
                        shopsDetails.map(shop => <Shop shop={shop}></Shop> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Shops;