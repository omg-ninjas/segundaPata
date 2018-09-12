import React from "react";
import SingleItem from "./SingleItem.jsx";
import { Switch, Route } from 'react-router-dom';

const ItemPage = ({ match }) => (
  <div className="Product">
    <div>
    </div>
    <div>
    </div>
    <main>
      <Switch>
        <Route path={`${match.url}:/id`} component={SingleItem} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout;
