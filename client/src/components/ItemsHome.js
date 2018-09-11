import React from 'react';

import SingleItem from "./item-page/SingleItem.jsx";

const ItemsHome = (props) => (
  <div>
    { props.products ?
      <div>
        {props.items.map((item, id) => (
          <SingleItem item={item} key={id} />
        ))}
      </div>
    : <p>"aquí van imágenes de perritos bn cute"</p> }
  </div>
)

export default ItemsHome;
