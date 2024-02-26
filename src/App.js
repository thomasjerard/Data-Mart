import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn';
import ConsumerPage from './pages/ConsumerPage';
import CarbonTable from './components/CarbonTable'
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from './global/AuthSlice';
import { useCookies } from 'react-cookie';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

function App() {

  const user = useSelector(selectUser);
  const [cookies, setcookies] = useCookies(['isValid', 'isAdmin']);

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
      {path !== "/signin" && <Navbar />}
      <Routes>
        <Route path="/">
          <Route index element={<ProductList category="" />}></Route>
          <Route path="/:productId" element={<ProductDetails category="" />}></Route>
          <Route path="signin" element={<SignIn />}></Route>
          <Route path="drafted" element={<ProductList category="drafted" />}></Route>
          <Route path="published" element={<ProductList category="published" />}></Route>
          <Route path="published/:productId" element={<ProductDetails category="published" />}></Route>
          <Route path="drafted/:productId" element={<ProductDetails category="drafted" />}></Route>
          <Route path="published/:productId/consumer" element={<ConsumerPage />}></Route>
          {/* <Route path= "navbar" element={<Navbar/>}></Route> */}
          {/* <Route path="consumer" element={<ConsumerPage />}></Route> */}
          <Route path="table" element={<CarbonTable />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
