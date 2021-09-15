import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useEffect, useState} from 'react';
import schema from './schema';
import * as yup from 'yup';

const initialFormData = {
  name:'',
  email:'',
  password:'',
  passwordConfirmation:null,
  tos: false,
}
const initialFormErrors = {
  name:'',
  email:'',
  password:'',
  passwordConfirmation:'',
  tos:'',
}
const initialDisabled = true;


function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [errors, setErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(()=> setErrors({...errors, [name]:''}))
    .catch((err)=> setErrors({...errors, [name]:err.errors[0]}))
  }

  const inputChange= (name, value)=>{
    validate(name,value);
    setFormData({
      ...formData, [name]:value
    });
  };

  useEffect(()=>{
    schema.isValid(formData)
    .then(valid=> setDisabled(!valid))
  }, [formData])

  return (
    <div className="App">
      <Form
        values = {formData}
        change = {inputChange}
        disabled = {disabled}
        errors= {errors}
      />
    </div>
  );
}

export default App;
