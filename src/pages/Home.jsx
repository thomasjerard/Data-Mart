import React, { useState, useEffect} from 'react';
import ProductComponent from '../components/ProductComponent';
import Navbar from '../components/Navbar';
import '../styles/Home.scss';
import { Search } from '@carbon/icons-react';
import { AspectRatio } from '@carbon/react';
import { useDispatch, useSelector } from 'react-redux';
import { setproducts, allproducts } from '../global/ProductsSlice';
import axios from "axios";
import addIcon from '../images/Add.png'
import AddNewProduct from '../components/AddNewProduct';
function Home() {
  const products = useSelector(allproducts);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log("Err: ", err);
  //     });
  //   dispatch(setproducts(response.data));
  //   console.log()
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const [searchInput, setSearchInput] = useState('');
  const [selectedDomains, setSelectedDomains] = useState([]);

  


  const handleDomainSelect = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter((selectedDomain) => selectedDomain !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  }

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const domainMatches = selectedDomains.length === 0 || selectedDomains.every((domain) => product.domains.includes(domain));
    return nameMatch && domainMatches;
  });

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);
  }

  let domains=['Weather Data','Healthcare Data','Legal Data','Brand Data','Mobile App Data','Environmental Data'];
  
  return (
      <div className='home'>
      <div className="productpage-header">
        <h1>Data Products</h1>
        {/* <p style={{ marginTop: '10px', marginBottom:'20px' }}>
          Duis Bibendum neque egestas congue quisque egestas diam in arcu cursus. Massa tincidunt dui ut ornare
          lectus. A diam maecenas sed enim ut. Cras semper auctor neque vitae tempus quam pellentesque nec nam.
        </p> */}
        <div style={{ position: 'relative' }}>
          <input
            placeholder="Enter term to search..."
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <span className='search-icon'><Search/></span>
        </div>
        
      </div>

      <div className='productpage-header'>
        {/* <h3>Filter by domain</h3> */}
        <div className='domains'>
          {domains.map((domain) => (
            <span
              key={domain}
              className='domain-list domain-button'
              onClick={() => handleDomainSelect(domain)}
              style={{
                backgroundColor: selectedDomains.includes(domain) ? '#E2CFEA' : '#FFF0F5',
              }}
            >
             {domain}
            </span>
          ))}
          
        </div>
        
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <AspectRatio ratio="1:1" key={product.key}>
            <ProductComponent
              key={product.key}
              id={product.key}
              name={product.name}
              desc={product.desc}
              img={product.img}
              by={product.by}
              url={product.url}
              domains={product.domains}
              productStage="product"
              category=""
            />
          </AspectRatio>
        ))}
      </div>
      
      
      </div>
      
  );
}

export default Home;

//This one has redux