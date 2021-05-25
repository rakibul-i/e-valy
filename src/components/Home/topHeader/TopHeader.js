import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import './TopHeader.css';

const TopHeader = () => {
    return (
        <div className="top__header d-lg-block d-md-block d-none">
            <div className="w-75 mx-auto d-flex">
                <div className="phone">
                    <FiPhoneCall className="topHeader__icon"/>
                    <span>01407127506</span>
                </div>
                <div className="mail mx-5">
                    <HiOutlineMail className="topHeader__icon"/>
                    <span>support@evaly.com.db</span>
                </div>
                <div className="app ml-auto">
                    <BsPhone className="topHeader__icon"/>
                    <span>Save big on your app!</span>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;