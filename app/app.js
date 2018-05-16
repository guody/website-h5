import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Regist from "./view/regist.js";
import './asserts/style/common.scss'


const App = () => (
  <MuiThemeProvider>
    <Regist />
  </MuiThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("content"));
