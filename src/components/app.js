import React, { Component } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSignOutAlt, faEdit, faBackspace} from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioManager from "./pages/portfolio-manager";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

library.add(faTrash, faSignOutAlt, faEdit, faBackspace);


// import test from './pages/test';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };



    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }


  handleSuccessfulLogout() {
    this.setState({loggedInStatus: "NOT_LOGGED_IN"
  });
}


   checkLoginStatus() {
    return axios
      .get("https://api.devcamp.space/logged_in", {
        withCredentials: true
      })
      .then(response => {
        const loggedIn = response.data.logged_in;
        const loggedInStatus = this.state.loggedInStatus;

        // If loggedIn and status LOGGED_IN => return data
        // If loggedIn status NOT_LOGGED_IN => update state
        // If not loggedIn and status LOGGED_IN => update state

        if (loggedIn && loggedInStatus === "LOGGED_IN") {
          return loggedIn;
        } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN"
          });
        } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  // componentShouldMount() {
  //   this.checkLoginStatus();
  // }

  componentDidMount() {
    this.checkLoginStatus();
  }

  authorizedPages() {
    return [<Route key="portfolio-manager" path="/portfolio-manager" component={PortfolioManager} />];
  }

  render() {
    
    return (
    <div className='container'>

      <Router>
        <div>
          <NavigationContainer 
          loggedInStatus={this.state.loggedInStatus}
          handleSuccessfulLogout={this.handleSuccessfulLogout}/>

          <Switch> 
            <Route exact path="/" component ={Home} /> {/* exact makes only "/" location and not anything else what starts with "/" -> like "/about-me" */}
            
            <Route 
              path="/auth"
              render={props => (
                <Auth
                  {...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}
            />


            <Route path="/about-me" component ={About} />
            {/* <Route path="/test" component ={test} /> don't forget about navigation-container */}
            <Route path="/blog" component ={Blog} />
            <Route path="/contact" component ={Contact} />
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
            <Route exact path="/portfolio/:slug" component ={PortfolioDetail} />
            <Route component ={NoMatch} />
          </Switch>

        </div>
      </Router>
    </div>
    );
  }
}

