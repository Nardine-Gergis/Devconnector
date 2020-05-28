const express = require('express');
const app = express();
const connectDB = require('./config/db');

//connect database
connectDB();

app.get('/', (req, res) => res.send('API running'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running on port ${PORT}`'));
