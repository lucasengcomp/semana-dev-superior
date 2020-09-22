import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './style.css';

const Header = () => (
    <header className="main-header">
        <Logo />
    </header>
);

export default Header;