import React, {Component}from "react";
import ReactDOM from "react-dom";
import MenuItem from "./components/search/menuItem.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ItemPage from "./components/item-page/ItemPage.jsx";

class App extends Component {
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
      <ItemPage />
      </center>
      </div>
    )
  }
  };



ReactDOM.render(<App />, document.getElementById("App"));
