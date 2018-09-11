import React, {Component}from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

import SearchBar from "./components/search/SearchBar.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import ItemsHome from "./components/ItemsHome.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      products: undefined
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        console.log(this.state.items);
        console.log("database mounted");
        this.setState({
          items: data,
          product: undefined
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  // handleButton(){
  //     let randomIndex = Math.floor(Math.random() * 30)
  //     let fortune = this.state.items[randomIndex]
  //     this.setState({
  //       fortune: fortune
  //     })
  //   }

 handleSubmit(){
   $.ajax({
     url: '/items',
     success: (data) => {
       console.log(this.state.items);
      console.log("handleSubmit");
      var products= this.state.items;
       this.setState({
         items: data,
         products: products
       })
     },

     error: (err) => {
     console.log('err', err);
     }
   });
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
      <ItemsHome items={this.state.items} products={this.state.products}/>
      </center>
      </div>
    )
  }
  };



export default Home;
