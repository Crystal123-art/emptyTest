const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  empFirstName: {
    type: String,
    required: true,
  },
  empMiddleName: {
    type: String,
    required: true,
  },
  empLastName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },
});

//pre-remove hook
employeeSchema.pre('remove', async function(next) {
  try {
    await mongoose.model('LeaveRequest').deleteMany({ empId: this._id });
    next();
  } catch (err) {
    next(err);
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
