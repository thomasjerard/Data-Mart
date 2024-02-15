import React from 'react';
import ProductComponent from './ProductComponent';
import Navbar from './Navbar';
import '../index.css'

function Home() {
  const products = [
    { key: "1", name: "Product 1", url:'product1',by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: "https://picsum.photos/1000/300" },
    { key: "2", name: "Product 2", url:'product2', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: "https://picsum.photos/1000/300" },
    { key: "3", name: "Product 3", url:'product3', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: "https://picsum.photos/1000/300" },
    { key: "4", name: "Product 4", url:'product4', by:'Jake Weatherald', desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img: "https://picsum.photos/1000/300" },

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
        />
      ))}
    </div>
    </div>
  );
}

export default Home;
