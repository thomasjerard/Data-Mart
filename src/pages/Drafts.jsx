import React, { useState } from 'react';
import ProductComponent from '../components/ProductComponent';
import { AspectRatio } from '@carbon/react';
import Navbar from '../components/Navbar';
import '../styles/Home.scss';
import img1 from '../images/product-bgd.jpg'
import addIcon from '../images/Add.png'
import { Search } from '@carbon/icons-react';
import AddNewProduct from '../components/AddNewProduct';



function Drafts() {
  const initialProducts = [
    { key: "1", domains:['Weather Data','Mobile App Data'], name: "Product 1", url:'product1',by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
    { key: "2", domains:['Legal Data','Healthcare Data'],  name: "Product 2", url:'product2', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
    { key: "3", domains:['Brand Data','Mobile App Data'],  name: "Product 3", url:'product3', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
    { key: "4", domains:['Environmental Data','Weather Data'],  name: "Product 4", url:'product4', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ", img: img1 },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); 

  const [products, setProducts]=useState(initialProducts)

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };


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
      <h1>Drafted Data Products</h1>
    
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
        <div className='add-icon' onClick={() => setIsAddModalOpen(true)}>
          <img src={addIcon} className='add-icon-img' alt="Add Icon" />
        </div>
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
              productStage="draftedproduct"
              category="Draft"
            />
          </AspectRatio>
        ))}
      </div>
      <AddNewProduct
        isOpen={isAddModalOpen}
        handleClose={() => setIsAddModalOpen(false)}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
}

export default Drafts;
