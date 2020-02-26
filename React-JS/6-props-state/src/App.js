
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

import React, { Component } from 'react';

class App extends Component {

  
  constructor(props) {
   

    super(props);
    this.state = {
      message: '',
      count:0
    }

  }

  greetMe(msg) {
    console.log('Hello ' + msg);
    this.setState({ message: msg })

  }

  incre(){
    this.setState(
      {
        count:this.state.count+1,
      }
    );
  }


  render() {
    return (
      <div className="container">

        <Greet pMsg={this.state.message} />
        <hr />

        <div className="card">
          <div className="card-title bg-danger">
            APP Component
                    </div>

          <div className="card-body">
            <div className="text-center">
              <div className="text-center">
                <span className="badge badge-info">Count: {this.state.count} </span>
                <hr/>
                
                <button className="btn btn-success" onClick={e => this.greetMe('Good Afternoon')}>Greet Me</button>
                <button className="btn btn-success" onClick={e => this.incre()}>Increment</button>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default App;

