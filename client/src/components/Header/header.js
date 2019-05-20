import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import Nav from './Sidenav/sidenav';

class Header extends Component{
    state={
        showNav:false
    }

    onHideNav = () =>{
        this.setState({showNav:false});
    }


    render(){

        return (
            <header>
                <div className="open_nav">
                    <FontAwesome name="bars" 
                        onClick={()=>this.setState({showNav:true})}
                        style={{
                            color : "#ffffff",
                            padding : '10px',
                            cursor: 'pointer'
                        }}/>
                </div>

                <Nav 
                    showNav={this.state.showNav}
                    onHideNav= {()=>this.onHideNav()}
                >
                </Nav>

                <Link to="/" className="logo">
                    My Library
                </Link>
                <div className="guess">
                    <span>If you don't have account use this one: &nbsp;&nbsp;&nbsp; </span>
                    <span><b> username:</b> guess , <b>password:</b> 1234</span>
                </div>
            </header>
        );
    }
}

export default Header;