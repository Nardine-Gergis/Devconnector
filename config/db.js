const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
        useNewUrlParser : true 
    });
    console.log('mongod connected .. ');
  } catch (err) {
    console.log(err.messge);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
