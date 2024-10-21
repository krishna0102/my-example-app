const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Backend route
app.get('/backend', (req, res) => {
  res.json({ message: 'Welcome to the Backend API' });
});

// New feature route
app.get('/new-feature', (req, res) => {
  res.json({ message: 'Welcome to the new feature API' });
});


// API route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Example of a POST route
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received', data });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
