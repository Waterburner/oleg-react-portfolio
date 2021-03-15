import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationComponent = props => {

    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to = "/blog" activeClassName="nav-link-active">
                    Blog
                </NavLink>
            </div>
        );
    };

    return(
        <div className="nav-wrapper">
            <div className="left-side">

                <div className="nav-link-wrapper"><NavLink exact to = "/" activeClassName="nav-link-active">Home</NavLink></div>
                <div className="nav-link-wrapper"><NavLink to = "/about-me" activeClassName="nav-link-active">About</NavLink></div>
                <div className="nav-link-wrapper"><NavLink to = "/contact" activeClassName="nav-link-active">Contact</NavLink></div>
                
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/blog", "Blog") : null }
                {props.loggedInStatus === "LOGGED_IN" ? <button>add blog</button> : '' } {/* or use null instead of '' (also make sure that navigation component has loggedInStatus in props) */}
            </div>

            <div className="right-side">Oleh Kovelskyi</div>
        </div>
    )
}

export default NavigationComponent;