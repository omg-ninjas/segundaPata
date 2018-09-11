import React from "react";
import SingleItem from "./SingleItem.jsx";

const ItemPage = props => (
  <div>
    {props.items.map((item, id) => (
      <SingleItem item={item} key={id} />
    ))}
  </div>
);
export default ItemPage;