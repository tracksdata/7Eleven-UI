import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';

import React, { Component } from 'react';

class App extends Component {


  constructor(props) {
    console.log("APP::constructor");
    super(props);
    this.state = {
      message: 'Message goes here'
    }
  }

  greetMe(msg) {
    //update state/ state changes
    this.setState({ message: msg }) // APP Zcomponent render method calls
  }



  render() {


    console.log("APP::render");
    let { message } = this.state;
    return (
      <div className="container">

        {message ? <Greet message={this.state.message} /> : null}
        <div className="card">
          <div className="card-title bg-danger">
            APP Component
                    </div>

          <div className="card-body">
            <div className="text-center">
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

      </div>
    );
  }

  componentDidMount() {
    console.log("APP::componentDidMount");
    setTimeout(() => {
      let response = 'Hello, react '
      this.setState({ message: response });
    }, 4000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("APP::componentDidUpdate");
  }

}

export default App;

