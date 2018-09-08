import React from 'react';

const ItemsHome = (props) => (
  <div>
    { props.item ?
      <li>{props.item.name}</li>
    : <p>"aquí van imágenes de perritos bn cute"</p> }
  </div>
)

export default ItemsHome;
