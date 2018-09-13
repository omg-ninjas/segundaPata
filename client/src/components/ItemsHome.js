import React from 'react';

import SingleItem from "./item-page/SingleItem.jsx";

const ItemsHome = (props) => (
  <div>
    { props.products ?
      <div>
        {props.products.map((item, id) => (
          <SingleItem item={item} key={id} setProduct={props.setProduct}/>
        ))}
      </div>
    : <p>"aquí van imágenes de perritos bn cute"</p> }
  </div>
)

export default ItemsHome;
