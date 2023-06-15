import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // not being used right now 
import React from 'react';

// Components
import Home from './Components/home';
import Login from './Components/login';
import Listings from './Components/listings';
import HeebsComponent from './Components/heebscomp';
import Fruits from './Components/fruit';


function App() {

  function App2() {
    return (
      <React.Fragment>
        <h1>this is from the second component</h1>
        <p>skrt skrt</p>
      </React.Fragment>
    );
  }



  return (
    <div className="App">
      <App2 />
      <HeebsComponent />
      <Fruits name="bananas" color="yellow"/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/listings' element={<Listings />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
