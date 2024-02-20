import React, { useState, useEffect } from 'react';
import '../styles/EditForm.scss';
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
    <Modal open={isOpen} onRequestClose={handleClose} modalHeading="Edit Product">
      <div className="edit-form-container">
        <div className="close-btn" onClick={handleClose}>
          <span>X</span>
        </div>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            name="name"
            labelText="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextArea
            id="description"
            name="description"
            labelText="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <DatePicker dateFormat="m/d/Y" datePickerType="single">
            <DatePickerInput
              id="creationdate"
              name="creationdate"
              labelText="Creation Date"
              placeholder="mm/dd/yyyy"
              value={formData.creationdate}
              onChange={handleDateChange}
              required
            />
          </DatePicker>
          <DatePicker dateFormat="m/d/Y" datePickerType="single">
            <DatePickerInput
              id="lastupdateddate"
              name="lastupdateddate"
              labelText="Last Updated Date"
              placeholder="mm/dd/yyyy"
              value={formData.lastupdateddate}
              onChange={handleDateChange}
              required
            />
          </DatePicker>
          <TextInput
            id="copyurl"
            name="copyurl"
            labelText="Copy URL"
            value={formData.copyurl}
            onChange={handleChange}
            required
          />
          <Button className="add" type="submit">
            Edit Product
          </Button>
        </form>
      </div>
    </Modal>
  );
};
export default EditFormProduct;













