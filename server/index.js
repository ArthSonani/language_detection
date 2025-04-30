const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user_routes');
const detectionRoutes = require('./routes/detectionroutes');

const app = express();

// Configure CORS with more specific options
app.use(cors({
  origin: '*', // Allow all origins in development. In production, replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

mongoose.connect('mongodb+srv://arthsonani:arth1234@languagedetection.p8v2obj.mongodb.net/?retryWrites=true&w=majority&appName=languagedetection').then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/test', (req, res) => {
  res.send('Server is running!');
});

app.use('/api/users', userRoutes);
app.use('/api/detection', detectionRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));
