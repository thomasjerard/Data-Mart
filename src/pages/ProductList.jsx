import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { AspectRatio } from '@carbon/react';
import '../styles/Home.scss';
import addIcon from '../images/Add.png'
import { Search } from '@carbon/icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { allproducts, setproducts } from '../global/ProductsSlice'
import AddNewProduct from '../components/AddNewProduct';



function ProductList({ category }) {
  const initialProducts = useSelector(allproducts);
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('');
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [products, setProducts] = useState(initialProducts)


  // const fetchProducts = async () => {
  //   const username = "Harry";
  //   const password = "pass123";
  //   const basicAuth = 'Basic ' + btoa(username + ':' + password);
  //   console.log(basicAuth);
  //   try {
  //     const response = await axios.get("api/dpx/webapi/data_products", {
  //       headers: {
  //         Authorization: basicAuth
  //       }
  //     });
  //     console.log(response.data);
  //     dispatch(setproducts(response.data));
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  const handleAddProduct = (newProduct) => {
    const newProductId = (products.length + 1).toString();
    const updatedProduct = {
      ...newProduct,
      key: newProductId,
    };
    setProducts([...products, updatedProduct]);
  };

  useEffect(() => {
    // fetchProducts();
    dispatch(setproducts(products));
    console.log(typeof (products));
    console.log(products);
  }, [products, dispatch]);

  const handleDomainSelect = (domain) => {
    if (selectedDomains.includes(domain)) {
      setSelectedDomains(selectedDomains.filter((selectedDomain) => selectedDomain !== domain));
    } else {
      setSelectedDomains([...selectedDomains, domain]);
    }
  }

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    const domainMatches = selectedDomains.length === 0 || selectedDomains.some((domain) => (product.domain == domain));
    return nameMatch && domainMatches;
  });

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);
  }


  let domains = ['Weather Data', 'Healthcare Data', 'Legal Data', 'Brand Data', 'Mobile App Data', 'Environmental Data'];


  return (
    <div className='home'>
      <div className="productpage-header">
        <h1>{category.toUpperCase()} DATA PRODUCTS</h1>

        <div style={{ position: 'relative' }}>
          <input
            placeholder="Enter term to search..."
            type="text"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <span className='search-icon'><Search /></span>
        </div>

      </div>

      <div className='productpage-header'>
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
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              desc={product.description}
              img={product.img}
              by={product.producer}
              domain={product.domain}
              category
            />
          </AspectRatio>
        ))}
      </div>
      {category === 'drafted' &&
        <>
          <div className='add-icon' onClick={() => setIsAddModalOpen(true)}>
            <img src={addIcon} className='add-icon-img' alt="Add Icon" />
          </div>
          <AddNewProduct
            isOpen={isAddModalOpen}
            handleClose={() => setIsAddModalOpen(false)}
            handleAddProduct={handleAddProduct}
          />
        </>
      }
    </div>
  );
}

export default ProductList;