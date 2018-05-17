import React from "react";
import http from "../util/http.js";
import api from "../api/api.js";
import {RaisedButton,TextField} from 'material-ui';
import "../asserts/style/login.scss"

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

      const res = await http.post(api.login, paramData);
      console.log(res)
      if (res.resCode == "00") {
          alert("登录成功")
      }
    }

    render (){
        const style = {
            marginTop: 25
        };        
        const hintStyle ={
            fontSize:12,
            color:"#666"
        }
        const inputStyle = {
            fontSize: 12,
            color:"#333"
        }        

        return (
            <div className="mainBox">
                <div className="loginBox">
                    <div><TextField name="userName" value={this.state.userName} onChange={this.inputChange} inputStyle={inputStyle} hintStyle={hintStyle} hintText = "请输入用户名" /></div>       
                    <div><TextField name="password" value={this.state.password} onChange={this.inputChange} inputStyle={inputStyle} type="password" hintStyle={hintStyle} hintText = "请输入密码" /></div>
                    <div className="btnBox"><RaisedButton label="登录" labelColor="#fff" backgroundColor="#4DD0E1" style={style} onClick={this.loginUser}/></div>
                </div>
            </div>
        )

    }
}

export default Login;