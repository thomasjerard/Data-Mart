import React from 'react';
import Navbar from './Navbar';

function Product() {
  const handleClick = () => {
    console.log("I was clicked");
  };

  const productStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin:'20px',
    backgroundColor:'#EEEDEB',
    height:'400px',
    padding:'20px'
    
  };

  const imageStyle = {
    maxWidth: '400px',
    marginRight: '30px', 
  };

  const headerStyle={
    marginBottom:'30px'
  }
  const buttonStyle = {
    display: 'block',
    marginBottom: '10px', 
  };

  return (
    <div>
      <Navbar />
      
      <div style={productStyle}>
        <img src='https://picsum.photos/300' alt="Sample photo" style={imageStyle} />
        <div>
          <div style={headerStyle}><h1>Product 1</h1></div>
          <p style={headerStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button onClick={handleClick} style={buttonStyle}>
            URL 1
          </button>
          <button onClick={handleClick} style={buttonStyle}>
            URL 2
          </button>
        </div>
      </div>
      </div>

  );
}

export default Product;
