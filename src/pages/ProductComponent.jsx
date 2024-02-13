import React from 'react';
import '../index.css'; // Include the CSS file

function ProductComponent({ name, img, desc, urls }) {
  return (
    <div className="product-component">
      <img src={img} alt="Sample photo" />
      <div className="product-info">
        <h1>{name}</h1>
        <p>{desc}</p>
        {urls}
      </div>
    </div>
  );
}

export default ProductComponent;
