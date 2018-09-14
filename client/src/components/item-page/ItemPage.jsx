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
    <div>
    { this.state.products ?
      <span>
      {`${this.state.products[parseInt(this.props.match.params.id)].name}
        ${this.state.products[parseInt(this.props.match.params.id)].description}
        ${this.state.products[parseInt(this.props.match.params.id)].price}
      `}
      </span>
    : <main>
      <h1>"Render individual item page"</h1>
    </main> }
  </div>
)}
};
export default ItemPage;
