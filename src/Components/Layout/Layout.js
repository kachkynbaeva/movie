import React from 'react';
import Header from "../Header/header";
import Footer from '../Footer/Footer'


const Layout= ({children}) => {
    return (
        <div style={{backgroundColor: '#000'}}>
            <Header/>
            <div style={{minHeight: '100vh'}}>
              {children}
            </div>
        {/*<Footer/>*/}
        </div>
    );
};

export default Layout;