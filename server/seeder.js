const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User'); // Adjust path if needed
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // 1. Clear existing users (Optional: be careful!)
    await User.deleteMany();

    // 2. Create the Admin User
    const adminUser = new User({
      username: 'Owner',
      email: 'muralinaga826@gmail.com',
      password: 'Murali@', // This will be hashed by the User model pre-save hook
      role: 'Owner',
    });

    await adminUser.save();

    console.log('Data Imported! Admin user created.');
    console.log('Email: admin@chennapatanam.com');
    console.log('Password: password123');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}