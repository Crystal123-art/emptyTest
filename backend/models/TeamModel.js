const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  teamId: {
    type: String,
    required: true,
    unique: true,
  },
  teamName: {
    type: String,
    required: true,
  },
  lineManager: {
    type: String,
    required: true,
  },
  functionalManager: {
    type: String,
    required: true,
  },
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
