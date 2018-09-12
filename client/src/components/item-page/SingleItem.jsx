import React from "react";
import {Route} from "react-router-dom";

const SingleItem = props => (
  <div>{`${props.item.name} ${props.item.price}`}</div>
);

export default SingleItem;
