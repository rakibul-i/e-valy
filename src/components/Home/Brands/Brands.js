import React from 'react';
import { Link } from 'react-router-dom';
import Brand from './Brand';
import './Brands.css';


const Brands = () => {
    const brandsDetails = [{
        image: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvMmVhZmFkZjZlOTEwLWFzdXMucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjkwfX19',
        name: 'ASUS'
        },
        {
            image: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvOWM1NWIyN2Q1YmY5LWxlbm92by5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvbnRhaW4ifSwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX0sImZsYXR0ZW4iOnRydWUsImpwZWciOnsicXVhbGl0eSI6OTB9fX0=',
            name: 'Lenovo'
        },
        {
            image: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvYjExODNkMzZkYmU5LWludGVsLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==',
            name: 'Intel'
        },
        {
            image: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvYjhhNDZkMzgyM2YzLWFjZXIucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJmaXQiOiJjb250YWluIn0sImJhY2tncm91bmQiOnsiciI6MjU1LCJnIjoyNTUsImIiOjI1NSwiYWxwaGEiOjF9LCJmbGF0dGVuIjp0cnVlLCJqcGVnIjp7InF1YWxpdHkiOjkwfX19',
            name: 'Acer'
        },
        {
            image: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvYjcxNWE4OGI1MTM0LWluZGl2aWR1YWwtY29sbGVjdGlvbi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjQwMCwiaGVpZ2h0Ijo0MDAsImZpdCI6ImNvbnRhaW4ifSwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MX0sImZsYXR0ZW4iOnRydWUsImpwZWciOnsicXVhbGl0eSI6OTB9fX0=',
            name: 'Collections'
        },
        {
            image: 'https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiJtZWRpYS5ldmFseS5jb20uYmQiLCJrZXkiOiJtZWRpYS9pbWFnZXMvNjZlN2JlOTFiYWM3LTQwLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY29udGFpbiJ9LCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfSwiZmxhdHRlbiI6dHJ1ZSwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==',
            name: 'FLORA PC'
        }
    ]
    return (
        <div className="brand__name">
            <div className="w-75 mx-auto">
            <div className="py-4">
            <Link className="brands" to="/">Brands</Link>
            </div>
            <div className="row pt-3">
                {
                    brandsDetails.map(brands => <Brand brand={brands} key={brands.image} ></Brand> )
                }
            </div>
            </div>
        </div>
    );
};

export default Brands;