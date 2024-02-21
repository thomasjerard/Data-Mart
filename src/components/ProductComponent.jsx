import React from 'react';
import '../index.css';
import { useNavigate} from 'react-router';

function ProductComponent({ id, name, by, img, desc, url, domains, productStage }) {

  const navigate = useNavigate();

  const headerStyle={
    fontWeight:'600',
    fontSize:'1.75rem'
  }

  const domainStyle={
    backgroundColor:'black',
    borderRadius:'10px',
    marginRight:'5px',
    padding:'3px',
    color:'white'
  }
  const domainsList={
    paddingTop:'10px'
  }

  const handleClick=()=>{
    navigate(`/${productStage}/${id}`);
  }

  return (
    <div className="product-component" onClick={handleClick}>
      <img src={img} alt="Sample photo" height="200px"/>
      <div className="product-info">
        <h1 style={headerStyle}>{name}</h1>
        <p>by <span style={{fontWeight:'600'}}>{by}</span></p>
        <div style={domainsList}>
        {domains.map(d => {
          return <span style={domainStyle}>{d}</span>
        })
        }
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ProductComponent;
