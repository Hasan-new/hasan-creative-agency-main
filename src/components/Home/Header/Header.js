import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <div class="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;