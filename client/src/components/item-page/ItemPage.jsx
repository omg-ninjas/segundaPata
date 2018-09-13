import React, {Component}from "react";
import { Switch, Route } from 'react-router-dom';
import $ from "jquery";
import axios from "axios";

import SingleItem from "./SingleItem.jsx";

class ItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: undefined
    }
  }
  componentDidMount() {
    axios.get('/items')
    .then(res => {
      const product = res.data;
      this.setState({ product });
    })
  }

 render(){
  return(
    <div>
    <main>
      <h1>"Render individual item page"</h1>

    </main>
  </div>
)}
};
export default ItemPage;
