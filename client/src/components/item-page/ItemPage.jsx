import React, {Component}from "react";
import { Switch, Route } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";

import SingleItem from "./SingleItem.jsx";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined
    }
  }
  componentDidMount() {
    axios.get('/items')
    .then(res => {
      const products = res.data;
      this.setState({ products });
    })
  }

 render(){
  return(
    <div className ="itemspage">
    { this.state.products ?
      <span>

      <h2>{`${this.state.products[parseInt(this.props.match.params.id)].name}`}</h2>
      <h3>{`${this.state.products[parseInt(this.props.match.params.id)].price}`}</h3>
        <h4>{`${this.state.products[parseInt(this.props.match.params.id)].description}`}</h4>

      </span>
    : <main>
      <h1>"Render individual item page"</h1>
    </main> }  
  </div>

)}
};
export default ItemPage;
