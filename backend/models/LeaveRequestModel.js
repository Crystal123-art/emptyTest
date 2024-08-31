const mongoose = require('mongoose');
const { LEAVE_STATUS } = require('../constants');

const leaveRequestSchema = new mongoose.Schema({
    reqId: {
        type: String,
        required: true,
        unique: true,
    },
    empId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    fromDate: {
        type: Date,
        required: true,
    },
    toDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(LEAVE_STATUS),
        default: LEAVE_STATUS.PENDING,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
});

  //pre-validate hook for maintaining data consistency
  leaveRequestSchema.pre('validate', function(next) {
    if (this.fromDate > this.toDate) {
      return next(new Error('From date must be before to date'));
    }
    next();
  });
  

const LeaveRequest = mongoose.model('LeaveRequest', leaveRequestSchema);
module.exports = LeaveRequest;
