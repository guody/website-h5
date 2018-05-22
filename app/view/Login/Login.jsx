import React from "react";
import PropTypes from 'prop-types';
import createHistory from 'history/createBrowserHistory'
import http from "../../util/http.js";
import api from "../../api/api.js";
import {withStyles} from '@material-ui/core';
import {Button,TextField} from '@material-ui/core';
import "../../assets/scss/login.scss"

const history = createHistory();

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },    
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
      color:"#fff"
    }
  });

class Login extends React.Component{
    //构造器
    constructor(props) {
        super(props);
        // 设置 initial state
        this.state = {
            userName: "",
            password: "",
        };
        this.inputChange = this.inputChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    //输入框value监控
    inputChange(e) {
        const target = e.target;
        this.setState({
            [target.name]: target.value,
        });
    }

    // 登录
    async loginUser() {
      let paramData = {
          userName: this.state.userName,
          password: this.state.password
      }
      console.log(paramData)
      const res = await http.post(api.login, paramData);
      console.log(res)
      if (res.resCode == "00") {
           // 获取token并存储到sessionStorage
           let token = res.resData.userToken;
            if (token) {
                sessionStorage.setItem('access_token', token);
            } 
            // history.push('/home');
            alert("登录成功")
      }
    }

    render (){
        const { classes } = this.props;    
        return (
            <div className="mainBox">
                <div className="loginBox">
                    <div><TextField label="用户名" className={classes.textField} name="userName"  margin="normal" value={this.state.userName} onChange={this.inputChange}/></div>       
                    <div><TextField label="密码" name="password" className={classes.textField}  margin="normal" value={this.state.password} onChange={this.inputChange} type="password" /></div>
                    <div className="btnBox"><Button variant="raised" className={classes.button}  onClick={this.loginUser}>登录</Button></div>
                </div>
            </div>
        )

    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);