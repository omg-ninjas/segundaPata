import React from "react";
import SingleItem from "./SingleItem.jsx";
import { Switch, Route } from 'react-router-dom';

const ItemPage = ({ match }, props) => (
  <div className="Product">
    <main>
      <Switch>
        <Route path={`${match.url}:/id`} component={SingleItem} />
        <span id='product'>{`${props.item.name} ${props.item.price}`}</span>
      </Switch>
    </main>
  </div>
)

export default ItemPage;
