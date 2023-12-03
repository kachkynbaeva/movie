import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import style from './style.css'

const Header = () => {
    return (
        <header className='header'>
            <nav className="nav">
                <div className='container'>
                    <img src={logo} alt=""/>
                    <Link to={'/'} >Home</Link>
                    <Link to={'/'} >Movie</Link>

                </div>
            </nav>
        </header>
    );
}

export default Header;
