require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// database
const connectDB = require('./config/connect');

connectDB(process.env.MONGO_URL);

app.listen(port, () => console.log(`Listening on port ${ port }`));