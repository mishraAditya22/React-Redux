import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import './App.css';


const App = ()=>{
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>}>Home</Route>
      </Routes>
    </>
  )
}

export default App;