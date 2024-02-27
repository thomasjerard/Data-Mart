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

function ProductList({ category }) {
  const initialProducts = useSelector(allproducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [cookies] = useCookies(['userRole', 'username']);

  const handleAddProduct = async (newProduct) => {
    const newProductId = (products.length + 1).toString();
    const updatedProduct = {
      domain: newProduct.domain,
      name: newProduct.name,
      // producer: newProduct.producer,
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
      fetchProducts();
      // Handle the response if needed
      alert('Element added:', response.data);
    } catch (error) {
      // Handle errors
      alert('Error adding element:', error);
    }

    // setProducts([...products, updatedProduct]);
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:9090/dpx/data_products", {
        headers: {
          Username: cookies.username
        }
      });
      // console.log("response data", response.data);
      setProducts(response.data);
      dispatch(setproducts(response.data));
      // console.log("products", products);
    } catch (error) {
      alert("Error: ", error);
    }
  };



  useEffect(() => {
    fetchProducts();
    dispatch(setproducts(products));
  }, [category]);

  const handleDomainSelect = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter((selectedDomain) => selectedDomain !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const domainMatches = selectedDomains.length === 0 || selectedDomains.some((domain) => product.domain === domain);
    return nameMatch && domainMatches;
  });

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
        {filteredProducts.map((product) => (
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
        ))}
      </div>
      {category === 'drafted' && (
        <>
          <div className="add-icon" onClick={() => setIsAddModalOpen(true)}>
            <img src={addIcon} className="add-icon-img" alt="Add Icon" />
          </div>
          <AddNewProduct isOpen={isAddModalOpen} handleClose={() => setIsAddModalOpen(false)} handleAddProduct={handleAddProduct} />
        </>
      )}
    </div>
  );
}

export default ProductList;
