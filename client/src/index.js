import React, {Component}from "react";
import ReactDOM from "react-dom";
import menuItem from "./menuItem.js";

const Index = () => (
  <center>

  <h1>
<a href="https://imgur.com/rTcOFGo"><img src="https://i.imgur.com/rTcOFGo.jpg" title="source: imgur.com" /></a>
    <div>Segunda Pata</div>
  </h1>
    <h2>Vende y Compra Accesorios, para Mascotas.</h2>
    </center>
  );

ReactDOM.render(<Index />, document.getElementById("index"));
