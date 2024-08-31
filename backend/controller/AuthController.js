// const User = require('../models/UserModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Employee = require('../models/EmployeeModel');

// exports.signup = async (req, res) => {
//     try {
//         const { empId, email, password, location, contact, gender, role } = req.body;

//         // Check if employee exists
//         const employeeExists = await Employee.findById(empId);
//         if (!employeeExists) {
//             return res.status(404).json({ message: 'Employee not registered' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const user = new User({
//             empId,
//             email,
//             password: hashedPassword,
//             location,
//             contact,
//             gender,
//             role
//         });

//         await user.save();

//         res.status(201).json({ message: 'User created successfully', user });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: 'Invalid email or password' });
//         }

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         // Generate JWT token
//         const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

//         res.status(200).json({ message: 'Login successful', token, role: user.role });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };
