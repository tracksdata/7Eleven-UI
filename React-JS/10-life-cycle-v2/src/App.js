import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Greet from './components/Greet';

class App extends Component {

  constructor(props) {
    console.log("APP::constructor");

    super(props);
    this.state = {
      message: 'Default Message',

    }

  }

  greetMessage(message) {
    console.log(message);
    this.setState({ message: message })
  }

  componentDidMount() {
    console.log("APP::componentDidMount");
    this.forceUpdate(); // invokes render function -> componentDidUpdate

    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(resposne => resposne.json())
      .then((employees) => {
        //console.log(employees);
        //this.setState({employees:JSON.stringify(employees)})

      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("APP::componentDidUpdate");
    // this.forceUpdate(); // illegal operation
  }


  render() {

    let { message } = this.state;
    console.log("APP::render");
    let { employees } = this.state;
    return (
      <div className="container">
        <Greet message={message}/>
        <hr/>
        <div className="card">
          <div className="card-header bg-primary">APP Component</div>
          <div className="card-body text-center" >

            <div style={{ clear: 'both' }}>
              <button className="btn btn-primary btn-space" onClick={e => this.greetMessage('Good Morning')}>GM</button>
              <button className="btn btn-primary btn-space" onClick={e => this.greetMessage('Good Afternoon')}>GF</button>
              <button className="btn btn-primary btn-space" onClick={e => this.greetMessage('Good Evening')}>GE</button>
              <hr />
              <span className="badge badge-warning">Total Sum: 0</span>
            </div>



            {employees}


          </div>
        </div>

      </div>

    );
  }
}

export default App;


