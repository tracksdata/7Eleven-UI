import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Projects from './components/Projects';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (


    <main>
      <div className="container mt-3">

        <Header />

        <div className="row">
          <div className="col-4 col-md-4">
            <Navbar />
          </div>

          <div className="col-8 col-md-8">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={Aboutus} />
              <Route path="/projects" component={Projects} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </div>

        </div>

      </div>

    </main>





  );
}

export default App;
