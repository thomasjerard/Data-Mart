import React from 'react';
import '../index.css';
import '../styles/ProductComponent.scss'
import { useNavigate} from 'react-router';

function ProductComponent({ name, by, img, desc, url, domains, productStage }) {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(`/${productStage}`);
  }

  return (
    <div className="product-component" onClick={handleClick}>
      <img src={img} alt="Sample photo" height="200px"/>
      <div className="product-info">
        <h1 className='header-style'>{name}</h1>
        <p>by <span style={{fontWeight:'600'}}>{by}</span></p>
        <div className='domains-list'>
        {domains.map(d => {
          return <span className='domain-style'>{d}</span>
        })
        }
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProductComponent;
