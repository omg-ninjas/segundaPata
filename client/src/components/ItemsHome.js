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
    : <div><img src="https://img.chewy.com/is/image/catalog/117128_MAIN._AC_SL400_V1533916341_.jpg" alt="aquí van imagenes de perritos bien cute" /></div> }
  </div>
)

export default ItemsHome;
