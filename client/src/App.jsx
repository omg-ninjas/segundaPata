import React, {Component}from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ItemPage from "./components/item-page/ItemPage.jsx";
import Upload from "./components/item-page/Upload.js";
import Error from "./components/item-page/error.js";
import Navigation from "./components/item-page/navigation.js";
import Home from "./home.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/item" component={ItemPage} />
            <Route path="/Upload" component={Upload} />
            <Route  component={Error} />

          </Switch>

        </div>
      </BrowserRouter>
    );
  }
};


ReactDOM.render(<App />, document.getElementById("App"));
