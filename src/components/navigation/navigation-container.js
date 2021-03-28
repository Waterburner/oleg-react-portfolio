import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';


const NavigationComponent = props => {

    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <NavLink to = {route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        );
    };

const handleSignOut = () => {
    axios
    .delete("https://api.devcamp.space/logout", { withCredentials: true })
    .then(response => {
        if (response.status === 200) {
          props.history.push("/");
          props.handleSuccessfulLogout();
        }
        return response.data;
    })
    .catch(error => {
        console.log("Error signing out", error);
    });
};

    return(
        <div className="nav-wrapper">
            <div className="left-side">

                <div className="nav-link-wrapper"><NavLink exact to = "/" activeClassName="nav-link-active">Home</NavLink></div>
                <div className="nav-link-wrapper"><NavLink to = "/about-me" activeClassName="nav-link-active">About</NavLink></div>
                <div className="nav-link-wrapper"><NavLink to = "/contact" activeClassName="nav-link-active">Contact</NavLink></div>
                <div className="nav-link-wrapper"><NavLink to = "/blog" activeClassName="nav-link-active">Blog</NavLink></div>
                {/* <div className="nav-link-wrapper"><NavLink to = "/test" activeClassName="nav-link-active">Test</NavLink></div> this is just test page */}
                
                {props.loggedInStatus === "LOGGED_IN" ? dynamicLink("/portfolio-manager", "Portfolio Manager") : null }
                {props.loggedInStatus === "LOGGED_IN" ? <button>add blog</button> : '' } {/* or use null instead of '' (also make sure that navigation component has loggedInStatus in props) */}
            </div>

            <div className="right-side">
                Oleh Kovelskyi

                {props.loggedInStatus === 'LOGGED_IN' ? (<a onClick={handleSignOut}> <i className="fas fa-sign-out-alt"></i> Sign out</a>)
                 : null}
            </div>
        </div>
    )
}

export default withRouter(NavigationComponent);