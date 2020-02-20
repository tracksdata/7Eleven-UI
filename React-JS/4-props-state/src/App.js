import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import StoryBox from './components/StoryBox';
import AddressList from './components/AddressList';

function App() {
/*
    let person={
      'id':1024,
      'name':'Praveen',
      'age':65,
      'address':{
        'street':'steer1',
        'city':'Hyderabad',
        'contacts':{
          'mobile':84884,
          'landline':'040-7474',
          'office':'033-7464674'
        }
      }
    }

    */
  return (

    <div>
        <Navbar title="Facebook-App"/>
        <hr/>
        <hr/>
        <StoryBox/>

        <hr/>
        <hr/>
        <AddressList/>
    </div>
  );
}

export default App;
