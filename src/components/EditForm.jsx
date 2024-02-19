import React, { useState, useEffect } from 'react';
import '../styles/EditForm.scss';
import Button from '@carbon/react/lib/components/Button';

const EditForm = ({ isOpen, handleClose, handleEditConsumer, rowData }) => {
  const [formData, setFormData] = useState({
    username: '',
    stage: '',
    lastviewed: '',
  });

  useEffect(() => {
    if (rowData) {
      setFormData({
        username: rowData.username || '',
        stage: rowData.stage || '',
        lastviewed: rowData.lastviewed || '',
      });
    }
  }, [rowData]);

  if (!isOpen) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log(`Field "${name}" changed to: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditConsumer(formData);
    handleClose();
  };

  return (
    <div className="edit-form-overlay">
      <div className="edit-form-container">
        <div className="close-btn" onClick={handleClose}>
          <span>X</span>
        </div>
        <h2>Edit Consumer</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
          </label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />

          <label>
            Stage:
          </label>
          <input type="text" name="stage" value={formData.stage} onChange={handleChange} required />

          <label>
            Last Viewed:
          </label>
          <input type="text" name="lastviewed" onChange={handleChange} value={formData.lastviewed} required />

          <Button className="add" type="submit">
            Edit Consumer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
