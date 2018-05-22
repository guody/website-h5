import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'
import './assets/scss/common.scss'
import indexRoutes from "./route/IndexRouter.jsx";

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  </Router> 
)

ReactDOM.render(<App />, document.getElementById("content"));
