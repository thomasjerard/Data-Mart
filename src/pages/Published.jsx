import React, { useState } from 'react';
import ProductComponent from '../components/ProductComponent';
import Navbar from '../components/Navbar';
import '../styles/Home.scss';
import img1 from '../images/product-bgd.jpg'

function Published() {
  const products = [
    { key: "1", domains:['Weather Data','Mobile App data'], name: "Product 1", url:'product1',by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "2", domains:['Legal Data','Healthcare data'],  name: "Product 2", url:'product2', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "3", domains:['Brand data','Mobile App data'],  name: "Product 3", url:'product3', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "4", domains:['Environmental Data','Weather data'],  name: "Product 4", url:'product4', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
  ];

  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    const searchText = event.target.value;
    setSearchInput(searchText);

  }
  const filteredProducts = products.filter((product) => {
    // return product.name.toLowerCase().includes(searchInput.toLowerCase());
    const nameMatch = product.name.toLowerCase().includes(searchInput.toLowerCase());
    // const domainMatch =
    //   product.domains.some((domain) => domain.toLowerCase().includes(searchInput.toLowerCase()));
    // return nameMatch || domainMatch;
    return nameMatch;
  });

  const inputStyle = {
    marginTop: '30px',
    borderRadius: '5px',
    padding: '10px',
    fontSize: '1rem',
    width: '80%',
  };

  const domainStyle={
    backgroundColor:'black',
    borderRadius:'10px',
    marginRight:'5px',
    padding:'3px',
    color:'white'
  }

  let domains=['duadwef','fewwefewf','fewhwjfhewj','fewhewhfiuewf','chcychdhu'];



  return (
    <div>
      <Navbar />
      <div className="productpage-header">
        <h1>Published Data Products</h1>
        <p style={{ marginTop: '10px', marginBottom:'20px' }}>
          Duis Bibendum neque egestas congue quisque egestas diam in arcu cursus. Massa tincidunt dui ut ornare
          lectus. A diam maecenas sed enim ut. Cras semper auctor neque vitae tempus quam pellentesque nec nam.
        </p>
        <h3 style={{textAlign:'left', paddingLeft:'50px'}}>Filter by name</h3>
        <input
          placeholder="Enter term to search..."
          type="text"
          style={inputStyle}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>


      <div className='productpage-header'>
      <h3>Filter by domain</h3>
      {domains.map(d => {
          return <span style={domainStyle}>{d}</span>
          
        })
        }
     
      </div>

      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductComponent
            key={product.key}
            name={product.name}
            desc={product.desc}
            img={product.img}
            by={product.by}
            url={product.url}
            domains={product.domains}
            productStage="publishedproduct"
          />
        ))}
      </div>
    </div>
  );
}
export default Published