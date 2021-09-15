import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useEffect, useState} from 'react';
import schema from './schema';
import * as yup from 'yup';
import Axios from 'axios';
import axios from 'axios';

const initialFormData = {
  name:'',
  email:'',
  password:'',
  tos: false,
}
const initialFormErrors = {
  name:'',
  email:'',
  password:'',
  tos:'',
}
const initialDisabled = true;


function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [errors, setErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const getUsers = () =>{
    axios.get(`https://reqres.in/api/users`)
    .then(res=> console.log(res.data.data))
  }

  const postUsers = ( newUser =>{
    axios.post(`https://reqres.in/api/users`)
    .then(res=>{
      console.log(res);
      //setUsers
      //resetFormValues
    })
    .catch(er => {
      console.log(er);
      //resetFormValues?
    })
  })

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

  const formSubmit = ()=>{
    const newUser = {
      name:formData.name,
      email:formData.email,
      password:formData.password,
      tos:!!formData.name,
    }
  }

  useEffect(()=>{
    getUsers();
  })

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
        submit={formSubmit}
      />
    </div>
  );
}

export default App;
