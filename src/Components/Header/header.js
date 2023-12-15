import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import './style.css';


const Header = () => {
    return (
        <header className='header'>
                <div className='container'>
                    <div className={'header-wrapper'}>
                      <img src={logo} alt=""/>
                      <Link className={'link'} to={'/'} >Home</Link>
                      <Link  className={'link'} to={'/searchpage'} >Search page</Link>
                    </div>
                </div>
            </header>
    );
}

export default Header;
