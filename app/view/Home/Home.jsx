import React from "react";
import http from "../../util/http.js";
import api from "../../api/api.js";
import Header from '../../component/Header/Header.jsx'

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
    <Header/>
  </div>
)

export default Home;