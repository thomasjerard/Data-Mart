import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Published from './pages/Published';
import Drafts from './pages/Drafts';
import DraftProduct from './pages/DraftProduct';
import PublishedProduct from './pages/PublishedProduct';
import ProductPage from './pages/ProductPage';
import SignIn from './pages/SignIn';
import ConsumerPage from './pages/ConsumerPage';
import Navbar from './components/Navbar';
import CarbonTable from './components/CarbonTable'
import { useSelector } from 'react-redux';
import { selectUser } from './global/AuthSlice';
import { useCookies } from 'react-cookie';

function App() {

  const user = useSelector(selectUser);
  const [cookies, setcookies] = useCookies(['isValid','isAdmin']);
  
  // useEffect(() => {
  //   if(!token){
  //     return <SignIn/>;
  //   }
  // },[token]);

  // if(!user){
    // console.log(cookies.isValid)
    // if(!cookies.isValid)
    //   return <SignIn/>;
  // }
  
  const path = window.location.pathname;
  console.log(path);

  return (
    <BrowserRouter>
      {path !== "/signin" && <Navbar/>}
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}></Route>
          <Route path="product/:productId" element={<ProductPage/>}></Route>
          <Route path="signin" element={<SignIn/>}></Route>
          <Route path="drafts" element={<Drafts/>}></Route>
          <Route path="published" element={<Published/>}></Route>
          <Route path="publishedproduct/:productId" element={<PublishedProduct/>}></Route>
          <Route path="draftedproduct/:productId" element={<DraftProduct/>}></Route>
          <Route path="consumer" element={<ConsumerPage/>}></Route>
          {/* <Route path= "navbar" element={<Navbar/>}></Route> */}
          <Route path= "consumer" element={<ConsumerPage/>}></Route>
          <Route path= "table" element={<CarbonTable/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
