const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  
const { GENDER } = require('../constants');
const { ROLES } = require('../constants');
const Employee = require('./EmployeeModel');

const userSchema = new mongoose.Schema({
  empId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase:true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: [true, "Phone number is required"],  // Ensures the contact field is mandatory
    unique: true,  // Ensures the contact field is unique in the collection
    sparse: true,  // Allows multiple null values without violating the uniqueness constraint
    validate: {
        validator: function(v) {
            return v != null && /^(?:\+\d{1,4}\s?)?\d{10}$/.test(v);  // Validates the phone number format
        },
        message: 'Phone number is invalid'
    }
},
  // contact: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   // match: [/^\+?\d{1,4}?\s?\d{10}$/, 'Phone number is invalid, must be a valid 10-digit number']
  //   match: [/^(?:\+\d{1,4}\s?)?\d{10}$/, 'Phone number is invalid, must be a valid 10-digit number']
    
  // },
  gender: {
    type: String,
    enum: Object.values(GENDER),
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    required: true,
  },
});

userSchema.pre('save', async function(next) {
  // Check if password field is modified before hashing
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);  // Hash password
    next();
  } catch (error) {
    next(error);
  }
});


userSchema.pre('validate', async function(next){
  try{
    const employeeExists = await Employee.findById(this.empId); //checks if the employee exists in the collection 
    if(!employeeExists){
      return next(new Error('The employee is not registered'));
    }
    next();
  }
  catch(err){
    next(err);
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
