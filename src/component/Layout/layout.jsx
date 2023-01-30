import React from 'react';
import Header from "../Header/Header.jsx";
import MenuHeader from "../MenuHeader/MenuHeader.jsx";

const Layout = (props) => {
    return (
        <>
           <Header/>
           <MenuHeader/>
            {props.children}
        </>
    );
};

export default Layout;