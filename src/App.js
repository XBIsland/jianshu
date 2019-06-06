import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store/index";

import Home from './page/home'
import Detail from './page/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
