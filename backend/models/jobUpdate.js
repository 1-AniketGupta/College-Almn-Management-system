const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const jobUpdateSchema = new mongoose.Schema({
    name: String,
    email: String,
    companyName: String,
    salary: Number,
    joiningDate: Date,
  });
  
const JobUpdate = mongoose.model('JobUpdate', jobUpdateSchema);

module.exports=JobUpdate;