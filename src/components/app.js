import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";
import Test from "./pages/test";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render(){
    
    return (
    <div className='container'>

      <Router>
        <div>
          <NavigationContainer />

          <Switch> 
            <Route exact path="/" component ={Home} /> {/* exact makes only "/" location and not anything else what starts with "/" -> like "/about-me" */}
            
            <Route 
              path="/auth"
              render={props => (
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                />
              )}
            />


            <Route path="/contact" component ={Contact} />
            <Route path="/blog" component ={Blog} />
            <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
            <Route component ={NoMatch} />
          </Switch>

        </div>
      </Router>

    </div>
    );
  }
}

