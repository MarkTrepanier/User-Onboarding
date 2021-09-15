import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useState} from 'react';
import schema from './schema';

const initialFormData = {
  name:'',
  email:'',
  password:'',
  passwordConfirmation:'',
  tos:false,
}
const initialDisabled = true;

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange= (name, value)=>{
    setFormData({
      ...formData, [name]:value
    });
  };

  return (
    <div className="App">
      <Form
        values = {formData}
        change = {inputChange}
        disabled = {disabled}
      />
    </div>
  );
}

export default App;
