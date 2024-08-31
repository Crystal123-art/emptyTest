import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../utils/constants';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    empId: '',
    email: '',
    password: '',
    location: '',
    contact: '',
    gender: '',
    role: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(`${baseURL}/user`, formData);
      alert('User registered successfully!');
    } catch (err) {
      //log the error
      console.error("Error", err);

      //safely handle errr
      if(err.response && err.response.data && err.response.data.error){
        setError(err.response.data.error);
      }else{
        setError('Something went wrong!');
      }
      
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Employee ID:
          <input
            type="text"
            name="empId"
            value={formData.empId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Role:
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Manager">Manager</option>
            <option value="Employee">Employee</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
