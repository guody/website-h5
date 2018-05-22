import Home from "../view/Home/Home.jsx";
import Login from "../view/Login/Login.jsx";
import Regist from "../view/Regist/Regist.jsx";

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



