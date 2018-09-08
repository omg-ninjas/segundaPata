import React, {Component}from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import SearchBar from "./components/search/SearchBar.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import ItemsHome from "./components/ItemsHome.js"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        console.log(this.state.items);
        console.log("te montó");
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }


 handleSubmit(){
   console.log("doing something");
 }


render(){
  return(
    <div>
  <center>

    <h1>
  <a href="https://imgur.com/rTcOFGo"><img src="https://i.imgur.com/rTcOFGo.jpg" title="source: imgur.com" /></a>
      <div>Segunda Pata</div>
    </h1>
      <h2>Vende y Compra Accesorios, para Mascotas.</h2>
      <SearchBar items={this.state.items} handleSubmit={this.handleSubmit} />
      <ItemsHome items={this.state.items}/>
      </center>
      </div>
    )
  }
  };



export default Home;
