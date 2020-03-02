import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

import React, { Component } from 'react';

class App extends Component {


  constructor(props) {
    console.log("APP::constructor");
    super(props);
    this.state = {
      message: 'Message goes here',
      counter: 1,
      seconds: '00',
      minutes: '0'
    }
  }

  greetMe(msg) {
    //update state/ state changes
    this.setState({ message: msg }) // APP Zcomponent render method calls
  }





  render() {



    console.log("APP::render");
    let { message, counter } = this.state;
    console.log(counter);
    
    return (

      <div className="container col-6">
          <Greet message={message} />
          <hr/>

        <div className="card">

          <div className="card-title bg-danger">
            APP Component - {counter}
                    </div>

          <div className="card-body">
            <div className="text-center">

              <hr />

              <button className="btn btn-success space" onClick={e => this.greetMe('Good Morning')}>GM</button>
              <button className="btn btn-success space" onClick={e => this.greetMe('Good Afternoon')}>GF</button>
              <button className="btn btn-success space" onClick={e => this.greetMe('Good Evening')}>GE</button>
              <button className="btn btn-success space" onClick={e => this.greetMe()}>Remove</button>

          
            </div>
          </div>

        </div>



      </div>

    );
    

  }

  componentDidMount() {
    console.log("APP::componentDidMount");
    
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("APP::componentDidUpdate");
  }

}

export default App;

