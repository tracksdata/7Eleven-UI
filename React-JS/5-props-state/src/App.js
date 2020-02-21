import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="container">

      <Header/>

      <hr/>
      <hr/>


      {/* <EmployeeList/> -*/}
     
     <UsersList/>
     
    </div>
  );
}

export default App;
