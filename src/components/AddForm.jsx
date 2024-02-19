import React from 'react';
import '../styles/EditForm.scss';
import Button from '@carbon/react/lib/components/Button';

const AddForm = ({ isOpen, handleClose, handleAddConsumer }) => {
  if (!isOpen) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.username.value,
      stage: e.target.stage.value,
      lastviewed: e.target.lastviewed.value,
    };
    handleAddConsumer(formData);
    handleClose();
  };

  return (
    <div className="edit-form-overlay">
      <div className="edit-form-container">
        <div className="close-btn" onClick={handleClose}>
          <span>X</span>
        </div>
        <h2>Add Consumer</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:</label>
            <input type="text" name="username" required />
          
          <label>
            Stage:</label>
            <input type="text" name="stage" required />
          
          <label>
            Last Viewed:</label>
            <input type="text" name="lastviewed" required />
          
          <Button className="add" type="submit">
            Add Consumer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddForm;
