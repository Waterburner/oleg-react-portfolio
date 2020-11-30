import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }



    render() {
        return(
            <div>
                <button><NavLink exact to = "/" activeClassName="nav-link-active">Home</NavLink></button>
                <button><NavLink to = "/about-me" activeClassName="nav-link-active">About</NavLink></button>
                <button><NavLink to = "/contact" activeClassName="nav-link-active">Contact</NavLink></button>
                <button><NavLink to = "/blog" activeClassName="nav-link-active">Blog</NavLink></button>
                {true ? <button>Add Blog</button> : '' /* or use null */}
            </div>
        )
    }
}