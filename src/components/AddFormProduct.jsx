import React, { useState } from 'react';
import '../styles/AddFormProduct.scss'
import { Modal, TextInput, TextArea, DatePicker, DatePickerInput, Button } from '@carbon/react';

const AddFormProduct = ({ isOpen, handleClose, handleAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    creationdate: '',
    lastupdateddate: '',
    copyurl: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const date = new Date();
  const getFullDate = () => {
    return (date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct({...formData, creationdate : getFullDate() , lastupdateddate: getFullDate()});
    console.log(formData);
    handleClose();
    setFormData({
      name: '',
      description: '',
      creationdate: '',
      lastupdateddate: '',
      copyurl: '',      
    })
  };

  

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
            Description
          </label>
          <TextArea
            id="Description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
          </div>
          <div class="CreationDate">
          <label>
            Creation Date
          </label>
          <DatePicker dateFormat="m/d/Y" datePickerType="single">
            <DatePickerInput
              id="creationdate"
              name="creationdate"
              value={getFullDate()}
              required
              disabled
            />
          </DatePicker>
          </div>
          <div class="LastUpdatedDate">
          <label>
            LastUpdatedDate
          </label>
          <DatePicker dateFormat='m/d/Y' datePickerType="single">
            <DatePickerInput
              id="lastupdateddate"
              name="lastupdateddate"
              value={getFullDate()}
              required
              disabled
            />
          </DatePicker>
          </div>
          <div class="URL">
          <label>
            URL
          </label>
          <TextInput
            id="copyurl"
            name="copyurl"
            onChange={handleChange}
            value={formData.copyurl}
            required
          />
          </div>
      </div>
    </Modal>
  );
};
export default AddFormProduct;









