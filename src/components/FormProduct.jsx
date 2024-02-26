import React, { useState, useEffect } from 'react';
import '../styles/FormProduct.scss';
import { Modal, TextInput, TextArea, DatePicker, DatePickerInput, Button } from '@carbon/react';

const EditFormProduct = ({ isOpen, isAdd, handleClose, handleEditProduct, rowData }) => {

  const date = new Date();
  const getFullDate = () => {
    return (date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
  }

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    creationDate: getFullDate(),
    updationDate: getFullDate(),
    url: '',
  });


  useEffect(() => {
    if (rowData) {
      setFormData({
        name: rowData.name || '',
        description: rowData.description || '',
        creationDate: rowData.creationDate || getFullDate(),
        updationDate: rowData.updationDate || getFullDate(),
        url: rowData.url || '',
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

  // const handleDateChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditProduct({ ...formData, updationDate: getFullDate() });
    handleClose();
    setFormData({
      name: '',
      description: '',
      creationDate: '',
      updationDate: '',
      url: '',
    })
  };
  return (
    <div id="formproduct">
      <Modal launcherButtonRef={Button} primaryButtonText={isAdd ? "Add" : "Edit"} secondaryButtonText="Cancel" onRequestSubmit={handleSubmit} onRequestClose={handleClose} open={isOpen || isAdd}>
        <div className="add-form-container">
          <h2 class="Heading">{isAdd ? "Add" : "Edit"}</h2>
          <div class="name">
            <label style={{fontSize:'16px'}}>
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
            <label style={{fontSize:'16px'}}>
              Description
            </label>
            <TextArea
              id="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <div class="CreationDate">
            <label style={{fontSize:'16px'}}>
              Creation Date
            </label>

            <DatePicker dateFormat="m/d/Y" datePickerType="single">
              <DatePickerInput
                id="creationdate"
                name="creationDate"
                value={formData.creationDate}
                disabled
                required
              />
            </DatePicker>
          </div>
          <div class="LastUpdatedDate">
            <label style={{fontSize:'16px'}}>
              Last Updated Date
            </label>
            <DatePicker dateFormat="m/d/Y" datePickerType="single">
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
            <label style={{fontSize:'16px'}}>
              URL
            </label>
            <TextInput
              id="copyurl"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default EditFormProduct;













