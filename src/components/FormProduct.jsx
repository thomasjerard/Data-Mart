import React, { useState, useEffect } from 'react';
import '../styles/FormProduct.scss';
import { Modal, TextInput, TextArea, DatePicker, DatePickerInput, Button } from '@carbon/react';

const EditFormProduct = ({ isOpen, isAdd, handleClose, handleEditProduct, rowData }) => {

  const date = new Date();
  const getFullDate = () => {
    return (date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear());
  }

  const [formData, setFormData] = useState({
    urlName: '',
    urlDescription: '',
    creationDate: getFullDate(),
    lastUpdateDate: getFullDate(),
    copyUrl: '',
  });

  //URL error state
  const [urlError, setUrlError] = useState('');


  useEffect(() => {
    if (rowData) {
      setFormData({
        urlName: rowData.urlName || '',
        urlDescription: rowData.urlDescription || '',
        creationDate: rowData.creationDate || getFullDate(),
        lastUpdateDate: rowData.lastUpdateDate || getFullDate(),
        copyUrl: rowData.copyUrl || '',
      });
    }
  }, [rowData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Check URL validation
    if (name === 'copyUrl') {
      validateUrl(value);
    }

  };

  // const handleDateChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };


  //URL validation

  const validateUrl = (url) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (url && !urlRegex.test(url)) {
      setUrlError('Invalid URL format');
    } else {
      setUrlError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

     // Check URL validation before submitting the form
     if (urlError) {
      // Focus on the URL input
      const urlInput = document.getElementById('copyurl');
      if (urlInput) {
        urlInput.focus();
      }

      const urlInputDiv = document.querySelector('.URLinput');
      if (urlInputDiv) {
        urlInputDiv.classList.add('error');
      }
  
      return;
    }

    const urlInputDiv = document.querySelector('.URLinput');
    if (urlInputDiv) {
      urlInputDiv.classList.remove('error');
    }

    handleEditProduct({ ...formData, lastUpdateDate: getFullDate() });
    handleClose();
    setFormData({
      urlName: '',
      urlDescription: '',
      creationDate: getFullDate(),
      lastUpdateDate: '',
      copyUrl: '',
    })
  };
  return (
    <div id="formproduct">
      <Modal launcherButtonRef={Button} primaryButtonText={isAdd ? "Add" : "Edit"} secondaryButtonText="Cancel" onRequestSubmit={handleSubmit} onRequestClose={handleClose} open={isOpen || isAdd}>
        <div className="add-form-container">
        
          <h2 className="Heading">{isAdd ? "Add" : "Edit"}</h2>
          <div className="name">
            <label style={{ fontSize: '16px' }}>
              Name
            </label>
            <TextInput
              id="name"
              name="urlName"
              value={formData.urlName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="Description">
            <label style={{ fontSize: '16px' }}>
              Description
            </label>
            <TextArea
              id="Description"
              name="urlDescription"
              value={formData.urlDescription}
              onChange={handleChange}
              required
            />
          </div>
          <div className="CreationDate">
            <label style={{ fontSize: '16px' }}>
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
          <div className="LastUpdatedDate">
            <label style={{ fontSize: '16px' }}>
              Last Updated Date
            </label>
            <DatePicker dateFormat="m/d/Y" datePickerType="single">
              <DatePickerInput
                id="lastupdateddate"
                name="lastUpdateDate"
                value={getFullDate()}
                required
                disabled
              />
            </DatePicker>
          </div>
          <div className="URL">
            <label style={{ fontSize: '16px' }}>
              URL
            </label>
            <TextInput
              id="copyurl"
              name="copyUrl"
              value={formData.copyUrl}
              onChange={handleChange}
              className={`URLinput ${urlError ? 'error' : ''}`}
              required
            />
            {urlError && <p className="error-message">{urlError}</p>}
          </div>
        </div>

      
      </Modal>
    </div>
  );
};
export default EditFormProduct;


