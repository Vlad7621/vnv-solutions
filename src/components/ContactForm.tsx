import React from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { IAlert } from '../models/IAlert';


interface IFormData {
  name: string;
  contact: string;
  message: string;
}

interface IContactForm {
  setAlert: (alert: IAlert) => void;
}

const ContactForm: React.FC<IContactForm> = ({ setAlert }) => {
  const [сommunication, setСommunication] = React.useState<string>('Email');
  const [formData, setFormData] = React.useState<IFormData>({ name: '', contact: '', message: '' });

  const handleCommunication = (e: SelectChangeEvent) => setСommunication(e.target.value);

  const handleFormData = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: e.target.value
    }));
  }

  const sendFormData = () => {
    const { name, contact, message } = formData;
    if(!name || !contact || (сommunication !== 'Phone' && !message))
      return setAlert({ type: 'error', message: 'Fill in all fields!' });
    return setAlert({ type: 'success', message: 'Success!' })
  }

  return (
    <FormControl fullWidth>
      <TextField
        required
        label='Name'
        variant='outlined'
        margin='dense'
        value={formData.name}
        onChange={handleFormData.bind(null, 'name')}
      />
      <FormControl fullWidth margin='dense'>
        <InputLabel>Communication</InputLabel>
        <Select
          value={сommunication}
          label='Communication'
          onChange={handleCommunication}
        >
          <MenuItem value='Email'>Email</MenuItem>
          <MenuItem value='Phone'>Phone</MenuItem>
          <MenuItem value='Telegram'>Telegram</MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        label={сommunication}
        variant='outlined'
        margin='dense'
        value={formData.contact}
        onChange={handleFormData.bind(null, 'contact')}
      />
      {сommunication !== 'Phone' && <TextField
        required
        hidden
        multiline
        label='Message'
        variant='outlined'
        margin='dense'
        rows={4}
        value={formData.message}
        onChange={handleFormData.bind(null, 'message')}
      />}
      <Button 
        variant='contained'
        size='large'
        sx={{ 
          background: '#000', 
          mt: '10px',
          ":hover": { background: '#000' }
        }}
        onClick={sendFormData}
      >
        Send
      </Button>
    </FormControl>
  );
};

export default ContactForm;