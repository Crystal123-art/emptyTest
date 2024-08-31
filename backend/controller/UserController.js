const { ConnectionReadyEvent } = require('mongodb');
const User = require('../models/UserModel');

//CREATE user
const createUser = async (req, res) => {
    try {
        const { empId, email, password, location, contact, gender, role } = req.body;
        console.log("Contact",contact)
        const user = new User({
            empId, 
            email, 
            password, 
            location,
            contact, 
            gender, 
            role,
        });

        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

// GET all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().populate('empId');
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET user by Id
  const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('empId');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //UPDATE user
  const updateUser = async (req, res) => {
    try {
      const userId = req.params.id; // Get the user ID from the URL parameters
      const updatedData = req.body; // Get the updated data from the request body
  
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', updatedUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //DELETE user
  const deleteUser = async (req, res) => {
    try {
      const UserId = req.params.id; // Get the user ID from the URL parameters
  
      const deletedUser = await User.findByIdAndDelete(UserId);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully', deletedUser });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
