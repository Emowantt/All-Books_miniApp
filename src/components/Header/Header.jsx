import React from 'react';
import Button from '../Button';

const Header = () => {
    const tg = window.Telegram.WebApp;


    return (
        <div className='header'>
            <Button/>
            <span>{tg.initDataUnsafe}</span>
        </div>
    );
};

export default Header;