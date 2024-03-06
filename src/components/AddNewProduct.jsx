import React, { useState } from 'react';
import '../styles/FormProduct.scss'
import { Modal, TextInput, TextArea, Button, MultiSelect, Dropdown } from '@carbon/react';
import img1 from '../images/product-bgd.jpg'


const AddNewProduct = ({ isOpen, handleClose, handleAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    domain: '',
    producer: '',
    img: img1
  });

  const [selectedDomain, setSelectedDomain] = useState('');


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleDomainChange = (selectedItem) => {
    setSelectedDomain(selectedItem);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct({
      ...formData,
      domain: selectedDomain ? selectedDomain.label : '',
    });
    handleClose();
    setFormData({
      name: '',
      description: '',
      domain: '',
      producer: '',
      img: img1
    });
  };

  const domainOptions = [
    { id: 'weather', label: 'Weather Data' },
    { id: 'healthcare', label: 'Healthcare Data' },
    { id: 'legal', label: 'Legal Data' },
    { id: 'brand', label: 'Brand Data' },
    { id: 'mobileapp', label: 'Mobile App Data' },
    { id: 'environmental', label: 'Environmental Data' },
  ];



  return (
    <div id="addformproduct">
      <Modal launcherButtonRef={Button} primaryButtonText="Add" secondaryButtonText="Cancel" onRequestSubmit={handleSubmit} open={isOpen} onRequestClose={handleClose}>
        <h2 className="heading">Add Data</h2>
        <div className="add-form-container">
          <div className="name">
            <label style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '-10px' }} >
              Name
            </label>
            <TextInput
              className='form-label'
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          {/* <div className="Description">
            <label style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '-10px' }}>
              Producer
            </label>
            <TextInput
              id="producer"
              name="producer"
              onChange={handleChange}
              value={formData.producer}
            />
          </div> */}
          <div className="Description">
            <label style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '15px' }} >
              Description
            </label>
            <TextArea
              id="Description"
              name="description"
              onChange={handleChange}
              value={formData.description}
            />
          </div>
          <div className="Domains">
            <label style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '15px' }}>Domain</label>
            <Dropdown
              id="domain"
              label="Select a domain"
              items={domainOptions}
              itemToString={item => item ? item.label : ''}
              onChange={({ selectedItem }) => handleDomainChange(selectedItem)}
            />
          </div>

        </div>
      </Modal>
    </div>
  );
};
export default AddNewProduct;
