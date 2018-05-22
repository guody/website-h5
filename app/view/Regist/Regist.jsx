import React from "react";
import http from "../../util/http.js";
import api from "../../api/api.js";
import {Button,TextField} from '@material-ui/core';
import "../../assets/scss/regist.scss"

class Regist extends React.Component {
  //类的静态属性
  static defaultProps = { 
    userName: "",
    nickName: "",
    password: "",
    password1: ""
  };

  //构造器
  constructor(props) {
      super(props);
      // 设置 initial state
      this.state = {
            userName: props.userName,
            nickName: props.nickName,
            password: props.password,
            password1: props.password1
      };
     this.inputChange = this.inputChange.bind(this);
     this.submitUser = this.submitUser.bind(this);
  }

  //输入框value监控
  inputChange(e) {
    const target = e.target;
    this.setState({
      [target.name]:target.value,
    });
  }

  // 提交注册
  async submitUser() {
    let paramData={
      userName:this.state.userName,
      nickName:this.state.nickName,
      password:this.state.password
    }

    const res = await http.post(api.regist, paramData);
    console.log(res)
    if (res.resCode=="00") {
        alert("注册成功")
    }
  }

  render() {
    const style = {
      margin: 20
    };
    const hintStyle ={
      fontSize:12,
      color:"#999"
    }
    const inputStyle = {
      fontSize: 12
    }
    return (
      <div className="mainBox">
        <div className="registBox">
          <div><label>用户名</label><TextField name="userName" value={this.state.userName} onChange={this.inputChange} inputStyle={inputStyle} hintStyle={hintStyle} hintText = "请输入用户名" /></div>
          <div><label>昵称</label><TextField name="nickName" value={this.state.nickName} onChange={this.inputChange} inputStyle={inputStyle} hintStyle={hintStyle} hintText = "请输入昵称" /></div>
          <div><label>密码</label><TextField name="password" value={this.state.password} onChange={this.inputChange} inputStyle={inputStyle} hintStyle={hintStyle} type="password" hintText = "请输入密码" /></div>
          <div><label>确认密码</label><TextField name="password1" value={this.state.password1} onChange={this.inputChange} inputStyle={inputStyle} hintStyle={hintStyle} type="password" hintText = "请再次输入密码" /></div>
          <div className="btnBox"><RaisedButton label="注册" primary={true} style={style} onClick={this.submitUser}/></div>
        </div>
      </div>
    );
  }
}

export default Regist;
