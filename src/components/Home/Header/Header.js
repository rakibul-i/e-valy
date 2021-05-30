import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Header.css'
import { BiSearchAlt2 } from 'react-icons/bi';
import { FiShoppingBag } from 'react-icons/fi';
import { RiNotification2Line } from 'react-icons/ri';
import { FiMessageSquare } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import {  useStateValue } from '../../contextAPI/StateProvider';

const Header = () => {
    const [{basket}] = useStateValue();
    return (
        <div className="header__main">
            <div className="w-75 mx-auto header__main__container">
            <div className="row py-4">
                <div className="col-lg-1 col-md-2 col-3 d-flex align-items-center">
                   <Link to="/"> <img src={logo} className="img-fluid" alt="" /></Link>
                </div>
                <div className="search__bar col-lg-8 col-md-6 col-9 ">
                   <div className="search__input">
                   <input type="text" placeholder="Search for.." className="input__bar form-control" />
                    <button className="search__btn px-lg-5 px-md-3 px-2"> <BiSearchAlt2/> </button>
                   </div>
                </div>
                <div className="user__info col-lg-3 col-md-4 col-12 d-md-block ">
                <div className="user__infor">
                <Link className="user__info__icon baske__icon d-flex" to="/basket"><FiShoppingBag/>{basket && basket.length > 0 ? <sup className="superscript">{basket.length}</sup>: <sup></sup> }</Link>
                <Link className="user__info__icon" to="/"><RiNotification2Line/></Link>
                <Link className="user__info__icon" to="/"><FiMessageSquare/></Link>
                <Link className="user__info__icon" to="/login"><BiUser/></Link>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;