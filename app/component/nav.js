import React from "react";
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import "../asserts/style/nav.scss"

class Nav extends React.Component {
    render(){
        const style = {
            background: "#26C6DA",
            padding: "0 40px",
            width:"60%",
            boxShadow:"none",
            display: "inline-block"
        }
        const itemStyle = {
            float:"left",
            color:"#fff"
        }
        return(
            <div className="menuBox">
                <Paper style={style}>
                    <Menu>
                        <MenuItem style={itemStyle} primaryText="首页" />
                        <MenuItem style={itemStyle} primaryText="全部文章" />
                        <MenuItem style={itemStyle} primaryText="图片" />
                        <MenuItem style={itemStyle} primaryText="个人资料" />
                    </Menu>
                </Paper>
                <div className="title"><span className="wel">WELCOME</span>郭小迪的个人网站</div>
            </div>
        )
    }
}

export default Nav;