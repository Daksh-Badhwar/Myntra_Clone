import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom"
import FetchItems from '../components/FetchItems';

function App() {
//fetch items as if one go directly on bag ,items should be visible
  return(<>
  
      <Header/>
      <FetchItems/>
    <Outlet/>
    <Footer/>
     </>)
  
}

export default App
