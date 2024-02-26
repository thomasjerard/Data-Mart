import React from 'react';
import '../styles/ProductComponent.scss'
import { useNavigate } from 'react-router';

function Product({ id, name, by, img, desc, domain, category }) {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${id}`);
  }

  return (
    <div className="product-component" onClick={handleClick}>
      <img src={img} alt="Sample photo" height="200px" />
      <div className="product-info">
        <h1 className='header-style'>{name}</h1>
        <p className='category'>{category}</p>
        <h5 className='properties'>by <span style={{ fontWeight: '600', color: '#102B3F' }}>{by}</span></h5>
        <div className='domains-list'>
          <span className='domain-style'>{domain}</span>
        </div>
        <p>{desc}</p>

      </div>
    </div>
  );
}

export default Product;