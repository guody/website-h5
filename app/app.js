import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router'

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Nav from "./component/nav.js";
import './asserts/style/common.scss'


const App = () => (
  <MuiThemeProvider>
    <Nav />
  </MuiThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("content"));
