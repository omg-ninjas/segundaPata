import React from "react";

const SingleItem = props => (
  <div>{`${props.item.description} ${props.item.quantity}`}</div>
);

export default SingleItem;
