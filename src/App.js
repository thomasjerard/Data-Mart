import './App.scss';
import {BrowserRouter, Routes, Route, RedirectFunction, redirect} from "react-router-dom";
import Home from './pages/Home';
import Published from './pages/Published';
import Drafts from './pages/Drafts';
import DraftProduct from './pages/DraftProduct';
import ProductPage from './pages/ProductPage';
import SignIn from './pages/SignIn';
import ConsumerPage from './pages/ConsumerPage';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {

  const [token , setToken] = useState(true);
  
  // useEffect(() => {
  //   if(!token){
  //     return <SignIn/>;
  //   }
  // },[token]);

  if(!token){
    return <SignIn/>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path="product" element={<ProductPage/>}></Route>
          <Route path="signin" element={<SignIn/>}></Route>
          <Route path="drafts" element={<Drafts/>}></Route>
          <Route path="published" element={<Published/>}></Route>
          <Route path="consumer" element={<ConsumerPage/>}></Route>
          <Route path= "navbar" element={<navbar/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
