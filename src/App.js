import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

const cors = require("cors");

import "./App.css";
import PostPane from "./components/PostPane";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <hr />
          <PostPane />
        </div>
      </Provider>
    );
  }
}

export default App;
