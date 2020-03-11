import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import A from './components/A';

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">

     <A  city={"Hyderabad"}>
        
      </A>


    </div>
    );
  }
}

export default App;
