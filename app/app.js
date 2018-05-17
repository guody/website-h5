import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Login from "./view/login.js";
import './asserts/style/common.scss'


const App = () => (
  <MuiThemeProvider>
    <Login />
  </MuiThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("content"));
