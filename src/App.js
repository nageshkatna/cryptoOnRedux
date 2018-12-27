import React, { Component } from 'react';
import CryptoContainer from "./containers/CryptoContainer";
import ChartContainer from "./containers/ChartContainer";
import { BrowserRouter,Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={CryptoContainer} exact/>
          <Route path='/chart' component={ChartContainer}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
