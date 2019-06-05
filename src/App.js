import React from "react";
import { GlobalStyle } from "./style";
import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle />
        <Header />
    </Provider>
  );
}

export default App;
