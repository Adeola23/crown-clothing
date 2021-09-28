import React from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from './page/homepage/homepage'
import ShopPage from "./page/Shop page/shop.compnent";
import Header from "./component/header-component/header.component";

const HatsPage = () => (
    <div>
        <h1> Hats page</h1>
    </div>
)

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
