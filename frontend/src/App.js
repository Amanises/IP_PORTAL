
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, /* Switch, */Route,Routes } from 'react-router-dom';
import Active from './components/Active';
import Update from './components/Update';
import Log from './components/Log';
import Home from './components/Home';
import React /* { useState } */ from 'react';
import SLDC_home from './components/sldc/SLDC_home';



 
function App() {

  // from here pass the username,sldc name as prop, to various other components
  

  return (
    <>
    <Router>

        <div className='App'>

                {/* <Sidebar/> */}
                
            <Routes>
                <Route path="/home" element={<Home />}/>         {/* It basically says if anyone comes searching for /home then return <Home> component */}
                <Route path="/active" element={<Active />}/>
                <Route path="/update" element={<Update />}/>
                <Route path="/log" element={<Log />}/>
                <Route path="/" element={<SLDC_home user={'Puneet_SLDC'} sldc={'UP-SLDC'}/>} />
            </Routes>
        </div>
    </Router>
    </>
  );
}

<div className="home">

</div>

export default App;
