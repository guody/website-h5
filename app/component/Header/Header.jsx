import React from "react";
import PropTypes from "prop-types";
import {withStyles} from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Hidden,
    Drawer,
    Typography
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import headerStyle from "../../assets/jss/component/headerStyle.jsx";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mobileOpen: false
        };
       // this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
       // this.headerColorChange = this.headerColorChange.bind(this);
    }

    render() {

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="title" color="inherit">
                    Title
                </Typography>
                </Toolbar>
            </AppBar>
        )
    }

}

export default withStyles(headerStyle)(Header);