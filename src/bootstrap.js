import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
//import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from "./components/app";
import reducers from "./reducers";

import Hairstyles from "./Hairstyles";
//import Proceed from "./components/pages/proceed";
//import Cart from "./Cart";
//import Proceed from "./components/pages/proceed";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router>
        <App>
        <Hairstyles />
        {/* <Cart /> */}
        {/* <Proceed /> */}
        <div>
          <Switch>  

          <Route exact path="/" component={App} />
          {/* <Route path='/cart' component={Cart} /> */}
         <Route path='/hairstyles' component={Hairstyles} /> 
          {/* <Route path='/proceed' component={Proceed} /> */}
          </Switch>  
        </div>
        </App>
      </Router>

    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
