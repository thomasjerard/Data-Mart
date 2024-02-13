import React from 'react';
import ProductComponent from './ProductComponent';
import Navbar from './Navbar';
import '../index.css'
function Home() {
  const products = [
    { key: "1", name: "Product 1", desc: "This is a description", img: "https://fastly.picsum.photos/id/486/200/200.jpg?hmac=edugbZ0GU8cJ5l4RXA5Lwg9YRoMns_UergIvkxbY5-w", urls: ["https://google.com"] },
    { key: "2", name: "Product 2", desc: "This is a description", img: "https://fastly.picsum.photos/id/486/200/200.jpg?hmac=edugbZ0GU8cJ5l4RXA5Lwg9YRoMns_UergIvkxbY5-w", urls: ["https://google.com"] },
    { key: "3", name: "Product 3", desc: "This is a description", img: "https://fastly.picsum.photos/id/486/200/200.jpg?hmac=edugbZ0GU8cJ5l4RXA5Lwg9YRoMns_UergIvkxbY5-w", urls: ["https://google.com"] },
  ];

  return (
    <div>
      <Navbar/>
    <div className="products-container">
      {products.map(product => (
        <ProductComponent
          key={product.key}
          name={product.name}
          desc={product.desc}
          img={product.img}
          urls={product.urls}
        />
      ))}
    </div>
    </div>
  );
}

export default Home;
