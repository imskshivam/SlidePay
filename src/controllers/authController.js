const jwt = require('jsonwebtoken');



const secretKey = 'your_secret_key';

// Mock user database
const users = [
  { id: 1, phoneNumber: '+1234567890', otp: null },
  // Add more users as needed
];

async function sendOTP(phoneNumber) {
  // Implement your OTP sending mechanism here
  // For example, you can use an SMS gateway API

  // Mock implementation using a public API
  const response = await fetch(
    `https://api.example.com/send-otp?phone=${phoneNumber}`
  );
  const data = await response.json();
  return data.otp;
}

function generateToken(user) { 
  const payload = { id: user.id };
  return jwt.sign(payload, secretKey);
}

async function login(req, res) {
  const { phoneNumber } = req.body;
  const user = users.find((u) => u.phoneNumber === phoneNumber);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const otp = await sendOTP(phoneNumber);
  user.otp = otp;

  return res.status(200).json({ message: 'OTP sent successfully' });
}

function verify(req, res) {
  const { phoneNumber, otp } = req.body;
  const user = users.find(
    (u) => u.phoneNumber === phoneNumber && u.otp === otp
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid OTP' });
  }

  user.otp = null;
  const token = generateToken(user);

  return res.status(200).json({ token });
}

module.exports = { login, verify };
