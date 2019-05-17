import React from 'react';
import Header from '../components/Header/header';
const Layout = (props)=>{
    return (
        <div>
            <Header></Header>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default Layout;