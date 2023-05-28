const express = require("express");
const feedRouter = express.Router();
const feedback = require('../models/feedback');


// Define a route to handle feedback submissions
app.post('/', async (req, res) => {
    const feedbackData = req.body;
  
    try {
     
  
      // Create a new feedback instance using the feedback model
      const feedback = new Feedback(feedbackData);
  
      // Save the feedback to the database
      await feedback.save();
  
      res.status(200).json({ message: 'Feedback received and stored!' });
    } catch (error) {
      console.error('Error storing feedback:', error);
      res.status(500).json({ message: 'Error storing feedback' });
    }
  });