import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Details from './pages/Details';
import Home from './pages/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/carrinho" component={ Cart } />
            <Route extact path="/details-product/:id" component={ Details } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
