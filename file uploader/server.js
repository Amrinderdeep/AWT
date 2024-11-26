const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage engine for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // File will be uploaded to the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename based on the timestamp
  },
});

const upload = multer({ storage: storage });

// Serve static files (frontend files)
app.use(express.static('public'));

// API route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

// Start the server
app.listen(4000, () => {
  console.log('Server started on http://localhost:4000');
});
