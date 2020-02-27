
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Greet from './components/Greet';
import ActionBox from './components/ActionBox';

class App extends Component {
 
  state={
    message:''
  }
  constructor(props) {
    super(props);
    console.log("APP::constructor");
  }

  changeMessage(msg){
    this.setState({message:msg}) // state change=> re-render render fun of parent and all its child components
    console.log('Message: '+msg);
    
  }

  render() {

    const { title, trainer } = this.props;
    //trainer="";  because props is immutable object
    console.log("APP::render");

    return (
      <div className="container">

          <h1>{title} - by <span className="badge badge-warning">{trainer}</span></h1>

          <hr />
          <ActionBox/>

  
  {/*
          <Greet message={this.state.message} />

          <button className="btn btn-primary space"  onClick={e=>this.changeMessage('GM')}>GM</button>
          <button className="btn btn-primary space"  onClick={e=>this.changeMessage('GF')}>GF</button>
          <button className="btn btn-primary space"  onClick={e=>this.changeMessage('GE')}>GE</button>

  */}
     






      </div>
    );
  }


}

App.defaultProps = {
  trainer: 'Anonymous'
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  trainer: PropTypes.string
}

export default App;
