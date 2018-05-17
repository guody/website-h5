import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Nav from "./component/nav.js";
import Main from "./view/main.js";
import './asserts/style/common.scss'


const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <div>
        <Nav />
        <Main />
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
);
ReactDOM.render(<App />, document.getElementById("content"));
