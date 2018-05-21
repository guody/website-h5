import Home from "view/Home/Home.js";
import Login from "view/Login/Login.js";
import Regist from "view/Regist/Regist.js";

const IndexRoutes = [
    { 
        path: "/", 
        name: "Home", 
        component: Home 
    },
    { 
        path: "/login", 
        name: "Regist", 
        component: Login 
    },
    { 
        path: "/regist", 
        name: "Login", 
        component: Regist 
    }
]

export default IndexRoutes;



