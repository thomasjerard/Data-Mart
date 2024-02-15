import React from 'react';
import '../index.css';

function ProductComponent({ name, by, img, desc, url }) {

  const headerStyle={
    fontWeight:'600',
    fontSize:'1.75rem'
  }

  const handleClick=()=>{
    window.location.href=`https://xxpennyxx.github.io/${url}`
  }
  return (
    <div className="product-component" onClick={handleClick}>
      <img src={img} alt="Sample photo" />
      <div className="product-info">
        <h1 style={headerStyle}>{name}</h1>
        <p>by <span style={{fontWeight:'600'}}>{by}</span></p>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProductComponent;
