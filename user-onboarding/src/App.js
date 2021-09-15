import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, {useState} from 'react';

const initialFormData = {
  name:'',
  email:'',
  password:'',
  tos:false,
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const inputChange= (name, value)=>{
    setFormData({
      ...formData, [name]:value
    })
  }

  return (
    <div className="App">
      <Form
        values = {formData}
        change = {inputChange}
      />
    </div>
  );
}

export default App;
