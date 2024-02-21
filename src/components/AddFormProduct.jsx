import React, { useState } from 'react';
import '../styles/EditForm.scss';
import '../styles/AddFormProduct.scss'
import { Modal, TextInput, TextArea, DatePicker, DatePickerInput, Button } from '@carbon/react';
const AddFormProduct = ({ isOpen, handleClose, handleAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    Description: '',
    creationdate: '',
    lastupdateddate: '',
    url: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(formData);
    console.log(formData);
    handleClose();
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
            value={formData.name}
            onChange={handleChange}
            required
          />
          </div>
          <div class="Description">
          <label>
            Description
          </label>
          <TextArea
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
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
              placeholder="mm/dd/yyyy"
              value={formData.creationdate}
              onChange={handleChange}
              required
            />
          </DatePicker>
          </div>
          <div class="LastUpdatedDate">
          <label>
            LastUpdatedDate
          </label>
          <DatePicker dateFormat="m/d/Y" datePickerType="single">
            <DatePickerInput
              id="lastupdateddate"
              name="lastupdateddate"
              placeholder="mm/dd/yyyy"
              value={formData.lastupdateddate}
              onChange={handleChange}
              required
            />
          </DatePicker>
          </div>
          <div class="URL">
          <label>
            URL
          </label>
          <TextInput
            id="url"
            name="url"
            value={formData.url}
            onChange={handleChange}
            required
          />
          </div>
      </div>
    </Modal>
  );
};
export default AddFormProduct;









