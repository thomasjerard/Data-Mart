import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import '../styles/Home.scss';
import addIcon from '../images/Add.png';
import { Search } from '@carbon/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { allproducts, setproducts } from '../global/ProductsSlice';
import AddNewProduct from '../components/AddNewProduct';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import img from '../images/product-bgd.jpg';
import axios from 'axios';
import { Tooltip } from '@carbon/react';

function ProductList({ category = "" }) {
  const initialProducts = useSelector(allproducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [cookies] = useCookies(['userRole', 'username']);

  const handleAddProduct = async (newProduct) => {
    const updatedProduct = {
      domain: newProduct.domain,
      name: newProduct.name,
      producer: cookies.username,
      description: newProduct.description,
      date: "",
      status: "draft"
    };
    try {
      // Make a POST request to add the element
      const response = await axios.post(
        'http://localhost:9090/dpx/data_products',
        updatedProduct,
        {
          headers: {
            Username: cookies.username
          }
        }
      );
      fetchProducts(category);
      // Handle the response if needed
      alert('Element added:', response.data);
    } catch (error) {
      // Handle errors
      alert('Error adding element:', error);
    }

    // setProducts([...products, updatedProduct]);
  };

  const fetchProducts = async (category) => {
    try {
      console.log(category);
      const response = await axios.get(`http://localhost:9090/dpx/data_products/${category}`, {
        headers: {
          Username: cookies.username
        }
      });
      console.log("response data", response);
      if (response.data == 'products collection is empty') {
        setproducts([]);
        dispatch(setProducts([]))
      } else {
        setProducts(response.data);
        // console.log(response)
        dispatch(setproducts(response.data));
      }
      // console.log("products", products);
    } catch (error) {
      console.log(error);
      alert("Error: ", error);
    }
  };

  useEffect(() => {
    fetchProducts(category);
    // dispatch(setproducts(products));
  }, [category]);



  // Ensure only one domain is selected at a time
  const handleDomainSelect = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains([]);
    } else {
      setSelectedDomains([domain]);
    }
  };

  const filteredProducts = (products) ? products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const domainMatches = selectedDomains.length === 0 || selectedDomains.some((domain) => product.domain === domain);
    return nameMatch && domainMatches;
  }) : [];

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);
  };

  useEffect(() => {
    if (!cookies.userRole) {
      navigate('/signin');
    }
  }, [])

  let domains = ['Weather Data', 'Healthcare Data', 'Legal Data', 'Brand Data', 'Mobile App Data', 'Environmental Data'];

  return (
    <div className="home">
      <div className="productpage-header">
        <h1>{category.toUpperCase()} DATA PRODUCTS</h1>
        <div style={{ position: 'relative' }}>
          <input
            placeholder="Enter term to search..."
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <span className="search-icon">
            <Search />
          </span>
        </div>
      </div>

      <div className="productpage-header">
        <div className="domains">
          {domains.map((domain) => (
            <span
              key={domain}
              className="domain-list domain-button"
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
        {filteredProducts.length != 0 ? filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            img={img}
            producer={product.producer}
            domain={product.domain}
            category
          />
        ))
          :
          <h3>No products Available</h3>
        }
      </div>
      {category === 'drafted' && (
        <>
          <div className="add-icon" onClick={() => setIsAddModalOpen(true)}>

            {/* Added tooltip text for add icon */}

            <Tooltip label="Add Product" align="left">
              <img src={addIcon} className="add-icon-img" alt="Add Icon" />
            </Tooltip>
          </div>
          <AddNewProduct isOpen={isAddModalOpen} handleClose={() => setIsAddModalOpen(false)} handleAddProduct={handleAddProduct} />
        </>
      )}
    </div>
  );
}

export default ProductList;
