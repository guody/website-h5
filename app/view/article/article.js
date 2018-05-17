import React from "react";
import http from "../../util/http.js";
import api from "../../api/api.js";
import {Route,Switch} from 'react-router-dom';

import ArticleList from './articleList'
import ArticleInfo from './articleInfo'

class Article extends React.Component {
    render(){
        return(
            <div>
                <h2>This is a 文章 page!</h2>
                <Switch>
                    <Route exact path='/article' component={ArticleList}/>
                    <Route path='/article/:arcid' component={ArticleInfo}/>                   
                </Switch>
            </div>
        )
    }
}

export default Article;