import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage/main';
import AroraProduct from "./pages/AroraProductPage/main.jsx"
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from './pages/HomePage/components/navbar';
import BeInspiredArea from './pages/HomePage/components/BeInspired';
import FooterArea from './pages/HomePage/components/FooterArea';

// import { Switch } from '@mui/material';



const App = () => {

  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the spinner after 5 seconds
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      {showSpinner ? (
        <div className='spinner-body'>
          <div className="spinner-square" >
            <div className="square-1 square"></div>
            <div className="square-2 square"></div>
            <div className="square-3 square"></div>
          </div >
        </div>
      ) : (
        <div>
          <BrowserRouter >
            < Navbar />
            <Routes>
              <Route path='/' Component={HomePage} />
              <Route path='/aurora' Component={AroraProduct } />
            </Routes>
            < BeInspiredArea />
            < FooterArea />
          </BrowserRouter>
        </div>
      )}
    </>

  )
}
export default App;