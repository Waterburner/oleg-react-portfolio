import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from "./portfolio/portfolio-container"
import NavigationContainer from "./navigation/navigation-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationContainer />
        <h1>Oleh Kovelskyi Portfolio</h1>
        <PortfolioContainer />
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
      </div>
    );
  }
}
