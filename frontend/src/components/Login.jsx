// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [role, setRole] = useState('');  // Role selection state
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleRoleChange = (e) => {
//         setRole(e.target.value);  // Update role based on selection
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/auth/login', formData);
//             const { token, role } = response.data;

//             // Save the token in localStorage or any other secure storage mechanism
//             localStorage.setItem('token', token);

//             // Redirect to the appropriate dashboard based on the role
//             if (role === 'Manager') {
//                 navigate('/manager-dashboard');
//             } else if (role === 'Employee') {
//                 navigate('/employee-dashboard');
//             } else {
//                 alert('Invalid role');
//             }
//         } catch (err) {
//             console.error(err);
//             alert('Login failed');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleChange}
//                 required
//             />
//             <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//             />
//             <select value={role} onChange={handleRoleChange} required>
//                 <option value="">Select Role</option>
//                 <option value="Employee">Employee</option>
//                 <option value="Manager">Manager</option>
//             </select>
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// export default Login;
