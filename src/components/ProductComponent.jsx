import React from 'react';
import '../index.css';
import '../styles/ProductComponent.scss'
import { useNavigate} from 'react-router';

function ProductComponent({ id, name, by, img, desc, url, domains, productStage, category }) {

  const navigate = useNavigate();
  const handleClick=()=>{
    navigate(`/${productStage}/${id}`);
  }

  return (
    <div className="product-component" onClick={handleClick}>
      <img src={img} alt="Sample photo" height="200px"/>
      <div className="product-info">
        <h1 className='header-style'>{name}</h1>
        <p className='category'>{category}</p>
        <h5 className='properties'>by <span style={{fontWeight:'600',color:'#102B3F'}}>{by}</span></h5>
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
