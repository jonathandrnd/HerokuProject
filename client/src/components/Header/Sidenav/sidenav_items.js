import React from 'react';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const SidenavItems = (props)=>{
    const items = [
        {
            type:'navItem',
            icon:'home',
            text:'Home',
            link:'/',
            restricted: false
        },
        {
            type:'navItem',
            icon:'user',
            text:'My Profile',
            link:'/user',
            restricted: false
        },
        {
            type:'navItem',
            icon:'users',
            text:'Add Admins',
            link:'/user/register',
            restricted: false
        },
        {
            type:'navItem',
            icon:'sign-in',
            text:'Login',
            link:'/login',
            restricted: false
        },
        {
            type:'navItem',
            icon:'file-text-o',
            text:'My reviews',
            link:'/user/user-reviews',
            restricted: false
        },
        {
            type:'navItem',
            icon:'files-o',
            text:'Add reviews',
            link:'/user/add',
            restricted: false
        },
        {
            type:'navItem',
            icon:'sign-out',
            text:'Logout',
            link:'/user/logout',
            restricted: false
        },
        
    ]


    const showItems = ()=>{
        return items.map((item,i)=>{
            return(
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}></FontAwesome>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }
    
    return (
        <div>
            {showItems()}
        </div>
    )
}
export default SidenavItems;