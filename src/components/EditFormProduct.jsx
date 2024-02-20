import React, { useState, useEffect } from 'react';
import '../styles/EditForm.scss';
import '../styles/AddFormProduct.scss';
import { Modal, TextInput, TextArea, DatePicker, DatePickerInput, Button } from '@carbon/react';
const EditFormProduct = ({ isOpen, handleClose, handleEditProduct, rowData }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    creationdate: '',
    lastupdateddate: '',
    copyurl: '',
  });
  
  useEffect(() => {
    if (rowData) {
      setFormData({
        name: rowData.name || '',
        description: rowData.description || '',
        creationdate: rowData.creationdate || '',
        lastupdateddate: rowData.lastupdateddate || '',
        copyurl: rowData.copyurl || '',
      });
    }
  }, [rowData]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduct(formData);
    handleClose();
  };
  return (
    <Modal launcherButtonRef={Button} primaryButtonText="Edit"  secondaryButtonText="Cancel" onRequestSubmit={handleSubmit} open={isOpen} onRequestClose={handleClose}>
      
      <div className="edit-form-container">
        
        <h2 class="Heading">Edit

        </h2>
        <form onSubmit={handleSubmit}>
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
              onChange={handleDateChange}
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
              onChange={handleDateChange}
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
          {/* <div class = "button"> 
         
        
          <Button className="add" type="submit">
            Edit
          </Button>
          </div> */}
        </form>
      </div>
    </Modal>
  );
};
export default EditFormProduct;













