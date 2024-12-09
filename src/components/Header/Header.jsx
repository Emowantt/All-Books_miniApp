import React from 'react';
import './Header.css';


const Header = () => {
    const tg = window.Telegram.WebApp;


    return (
        <div className='header'>
            <span className='logo'>All Books Shop</span>
            <span className='username'>{tg.initDataUnsafe?.user?.username}</span>
        </div>
    );
};

export default Header;