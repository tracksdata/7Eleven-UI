import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';

function App() {
  return (

    <Router>

      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2 col-md-2 col-lg-2">
            <Navbar />
          </div>

          <div className="col-10 col-md-10 col-lg-10">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/products" component={Products} exact />
              <Route path="/products/:id" component={Product} exact />

            </Switch>
          </div>
        </div>




      </div>


    </Router>

  );
}

export default App;
