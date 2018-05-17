import {Route,Switch} from 'react-router-dom';
import React from "react";
import Home from "./home.js";
import Article from "./article/article.js";
import Picture from "./picture/picture.js";
import Personal from "./personal.js";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/article' component={Article}/>
            <Route path='/picture' component={Picture}/>
            <Route path='/personal' component={Personal}/>
        </Switch>
    </main>
)

export default Main;