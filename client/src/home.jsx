import React, {Component}from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import MenuItem from "./components/search/menuItem.js";
import ItemPage from "./components/item-page/ItemPage.jsx";

class Home extends Component {
render(){
  return(
    <div>
  <center>

    <h1>
  <a href="https://imgur.com/rTcOFGo"><img src="https://i.imgur.com/rTcOFGo.jpg" title="source: imgur.com" /></a>
      <div>Segunda Pata</div>
    </h1>
      <h2>Vende y Compra Accesorios, para Mascotas.</h2>
      <MenuItem/>
      </center>
      </div>
    )
  }
  };



export default Home;
