const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./config/db');
const notificationRoutes = require('./routes/notifications');

// Connect to DB
connectDB();

app.use(express.json());
app.use('/api', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
