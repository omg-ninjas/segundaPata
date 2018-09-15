import React, {Component}from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import axios from "axios";

import SearchBar from "./components/search/SearchBar.js";
import ItemPage from "./components/item-page/ItemPage.jsx";
import ItemsHome from "./components/ItemsHome.js";
import UploadProduct from "./components/UploadProduct.jsx";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      products: undefined,
      product: undefined
    }
    this.setProduct = this.setProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('/items')
    .then(res => {
      const items = res.data;
      this.setState({ items });
    })
  }

 handleSubmit(){
  axios.get('/items')
  .then(res => {
   var products = res.data;
    this.setState({products});
  })
 }

setProduct(id){
  this.setState({
    product: id
  })
}

// postItem(Upload){
//   axios.post('item', {
//   newUpload = {
//     name: "",
//     description:"",
//     price:"",
//     category:"",
//     email:"",
//     vendor:""
//
//   }
// })
// }


render(){
  return(
    <div>
      <center>
        <h1>
          <img src="https://i.imgur.com/hxDOW9A.jpg" title="Una pagina para tus mascotas!" />
          <div>Segunda Pata</div>
        </h1>
        <h2>Vende y Compra Accesorios, para Mascotas.</h2>
        <SearchBar items={this.state.items} handleSubmit={this.handleSubmit} />
        <ItemsHome items={this.state.items} products={this.state.products} setProduct={this.setProduct}/>
      </center>
      <div class="fb-like" data-href="https://github.com/mambo-num-5" data-layout="standard" data-action="like" data-size="large" data-show-faces="true" data-share="true">
      </div>
    </div>
    )
  }
};



export default Home;
