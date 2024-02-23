import React, { useState } from 'react';
import '../styles/AddFormProduct.scss'
import { Modal, TextInput, TextArea, Button, MultiSelect} from '@carbon/react';
import img1 from '../images/product-bgd.jpg'


const AddNewProduct = ({ isOpen, handleClose, handleAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    desc: '',
    domains: [],
    by:'',
    img:img1
  });

  const [selectedDomains, setSelectedDomains] = useState([]); // State for selected domains


  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleDomainChange = (selectedItems) => {
    setSelectedDomains(selectedItems); // Update the selected domains state
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct({
      ...formData,
      domains: selectedDomains.map((item) => item.label),
     
    });
    handleClose();
    setFormData({
      name: '',
      desc: '',
      domains: [],
      by:''
    });
  };

  const domainsOptions = [
    { id: 'weather', label: 'Weather Data' },
    { id: 'healthcare', label: 'Healthcare Data' },
    { id: 'legal', label: 'Legal Data' },
    { id: 'brand', label: 'Brand Data' },
    { id: 'mobileapp', label: 'Mobile App Data' },
    { id: 'environmental', label: 'Environmental Data' },
  ];

  

  return (
    <Modal launcherButtonRef={Button} primaryButtonText="Add"  secondaryButtonText="Cancel" onRequestSubmit={handleSubmit} open={isOpen} onRequestClose={handleClose}>
      <h2 class="heading">Add Data</h2>
      <div className="add-form-container">
          <div class="name">
          <label>
            Name
          </label>
           <TextInput
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
          </div>
          <div class="Description">
          <label>
            Producer
          </label>
          <TextInput
            id="By"
            name="by"
            onChange={handleChange}
            value={formData.by}
          />
          </div>
          <div class="Description">
          <label>
            Description
          </label>
          <TextArea
            id="Description"
            name="desc"
            onChange={handleChange}
            value={formData.desc}
          />
          </div>
          <div className="Domains">
          <label>Domains</label>
          <MultiSelect
            id="domains"
            label=""
            items={domainsOptions}
            itemToString={(item) => item.label}
            onChange={({ selectedItems }) => handleDomainChange(selectedItems)}
            selectedItems={selectedDomains}
          />
        </div>
          
      </div>
    </Modal>
  );
};
export default AddNewProduct;









