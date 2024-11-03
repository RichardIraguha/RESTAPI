// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port number
const port = 3000;

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// Sample data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];

// Define a route to get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Define a route to get an item by id
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id == req.params.id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// Define a route to create a new item
app.post('/items', (req, res) => {
    const newItem = { id: items.length + 1, name: req.body.name };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});