import React from 'react';
import ProductComponent from '../components/ProductComponent';
import Navbar from './Navbar';
import '../styles/Home.scss'
import img1 from "../images/product-bgd.jpg"

function Home() {
  const products = [
    { key: "1", domains:['Weather Data','Mobile App data'], name: "Product 1", url:'product1',by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "2", domains:['Legal Data','Healthcare data'],  name: "Product 2", url:'product2', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "3", domains:['Brand data','Mobile App data'],  name: "Product 3", url:'product3', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
    { key: "4", domains:['Environmental Data','Weather data'],  name: "Product 4", url:'product4', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: img1 },
  ];

  return (
    <div>
      <Navbar/>
      <div className='productpage-header'>
        <h1>Data Products</h1>
        <p style={{marginTop:'10px'}}>Duis Bibendum neque egestas congue quisque egestas diam in arcu cursus. Massa tincidunt dui ut ornare lectus. A diam maecenas sed enim ut. Cras semper auctor neque vitae tempus quam pellentesque nec nam. </p>
      </div>
    <div className="products-container">
      {products.map(product => (
        <ProductComponent
          key={product.key}
          name={product.name}
          desc={product.desc}
          img={product.img}
          by={product.by}
          url={product.url}
          domains={product.domains}
        />
      ))}
    </div>
    </div>
  );
}

export default Home;
