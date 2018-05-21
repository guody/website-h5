import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";
import './asserts/style/common.scss'
import IndexRouter from "routes/IndexRouter.js";

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
