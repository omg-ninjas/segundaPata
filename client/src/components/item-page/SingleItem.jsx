import React from "react";

const SingleItem = props => (
  <div>{`${props.item.name} ${props.item.price}`}</div>
);

export default SingleItem;
