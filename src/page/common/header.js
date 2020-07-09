import React from 'react';

const logo = require('../../img/logo.png');

const Header = () => {
    return (
        <div className="header">
            <div className="inner-container">
                <div className="header-content" id="header-logo">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;