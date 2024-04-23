import { useState } from 'react'
import './App.css'
import Header from './containers/Header/Header.jsx';
import Home from './containers/pages/Home/Home.jsx';
import Footer from './containers/Footer/Footer.jsx';

function App() {
  return (
    <>  
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App;
