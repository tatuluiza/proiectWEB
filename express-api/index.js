const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Define the port
const PORT = process.env.PORT || 5500;

// Serve the JSON data at an endpoint
app.get('/api/data', (req, res) => {
    const dataPath = path.join(__dirname, 'db', 'data.json');
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Serve static files from the 'proiectWEB' folder
app.use(express.static(path.join(__dirname, '../proiectWEB')));

// Fallback to index.html for SPA (if necessary)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../proiectWEB', 'home.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
