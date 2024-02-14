import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Published from './pages/Published';
import PublishedProduct from './pages/PublishedProduct';
import Drafts from './pages/Drafts';
import DraftProduct from './pages/DraftProduct';
import Product from './pages/Product';
import SignIn from './pages/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route> path = "tdjhhj" element={tdjhhj/>}</Route>
          <Route path="home" element={<Home/>}></Route>
          <Route path="product" element={<Product/>}></Route>
          <Route path="signin" element={<SignIn/>}></Route>
          <Route path="drafts" element={<Drafts/>}></Route>
          <Route path="published" element={<Published/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
