import React from "react";
import http from "../../util/http.js";
import api from "../../api/api.js";

import PictureList from './pictureList'
import PictureInfo from './pictureInfo'

class Picture extends React.Component {
    render(){
        return(
            <div>
                <h2>This is a 图片 page!</h2>
                <Switch>
                    <Route exact path='/picture' component={PictureList}/>
                    <Route path='/picture/:sourceid' component={PictureInfo}/>                   
                </Switch>
            </div>
        )
    }
}

export default Picture;