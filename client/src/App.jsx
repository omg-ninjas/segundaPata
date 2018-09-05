import React, {Component}from "react";
import ReactDOM from "react-dom";
import menuItem from "./menuItem.js";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      list:[]
    }

  }

  render() {
    return(
      <center>
      <div>
  <h1>
<a href="https://imgur.com/rTcOFGo"><img src="https://i.imgur.com/rTcOFGo.jpg" title="source: imgur.com" /></a>
    <div>Segunda Pata</div>
      </h1>

    <h2>Vende y Compra Accesorios, para Mascotas.</h2>
    <menuItem />
    </div>
    </center>
  );
  
}
}








ReactDOM.render(<App />, document.getElementById("App"));
