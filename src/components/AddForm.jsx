import React, {useState} from 'react';
import '../styles/EditForm.scss';
import Button from '@carbon/react/lib/components/Button';
import boypic from '../images/boypic.png';
import girlpic from '../images/girlpic.png';
import { Modal, TextInput, TextArea, DatePicker, DatePickerInput } from '@carbon/react';


const AddForm = ({ isOpen, handleClose, handleAddConsumer }) => {
  const [formData, setFormData] = useState({
    username: '',
    stage: '',
    lastviewed: '',
    profile:''
  });

  if (!isOpen) {
    return null;
  }

  const handleUsernameChange = (e) => {
    const selectedUsername = e.target.value;
    const selectedUser = additionalRows.find((user) => user.username === selectedUsername);

    if (selectedUser) {
      setFormData({
        ...formData,
        username: selectedUser.username,
        stage: selectedUser.stage,
        lastviewed: selectedUser.lastviewed,
        profile:selectedUser.profile
      });
    } else {
      setFormData({
        ...formData,
        username: selectedUsername,
        stage: '',
        lastviewed: '',
        profile:''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddConsumer(formData);
    handleClose();
    setFormData({
      username: '',
      stage: '',
      lastviewed: '',
      profile:''
    });
  };

  const additionalRows = [
    {
      id: 'c',
      profile: <img src={boypic} alt="pic" />,
      username: 'Mahidhar789',
      stage: 'Consumer',
      lastviewed: '02/29/2024',
    },
    {
      id: 'd',
      profile: <img src={girlpic} alt="pic" />,
      username: 'Sandra696969',
      stage: 'Consumer',
      lastviewed: '02/29/2024',
    },
    {
      id: 'e',
      profile: <img src={girlpic} alt="pic" />,
      username: 'dimpul234',
      stage: 'Consumer',
      lastviewed: '02/29/2024',
    },
    {
      id: 'f',
      profile: <img src={girlpic} alt="pic" />,
      username: 'bhavya8992',
      stage: 'Consumer',
      lastviewed: '02/29/2024',
    },

  ];

  const suggestedUsernames = additionalRows.map(row => row.username);

  return (
    <Modal launcherButtonRef={Button} primaryButtonText="Add"  secondaryButtonText="Cancel" onRequestSubmit={handleSubmit} open={isOpen} onRequestClose={handleClose}>
      <div className='modal-form'>
        
        <h2 style={{marginBottom:'20px', color:'#102B3F'}}>Add Consumer</h2>
        <form onSubmit={handleSubmit}>
            <TextInput
              className='text-input'
              type="text"
              id="username"
              name="username"
              labelText="Username"
              list="usernameSuggestions"
              value={formData.username}
              onChange={handleUsernameChange}
              required
            />
            <datalist id="usernameSuggestions">
              {suggestedUsernames.map((username, index) => (
                <option key={index} value={username} />
              ))}
            </datalist>

            <TextInput
              type="text"
              id="stage"
              name="stage"
              labelText="Stage"
              value={formData.stage}
              onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
              required
              disabled
            />
            <DatePicker dateFormat='m/d/Y' datePickerType="single">
            <DatePickerInput
              name="lastviewed"
              id="lastviewed"
              labelText="Last Viewed"
              value={formData.lastviewed}
              onChange={(e) => setFormData({ ...formData, lastviewed: e.target.value })}
              required
              disabled
            />
            </DatePicker>
        </form>
      </div>
    </Modal>
  );
};

export default AddForm;