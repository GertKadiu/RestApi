const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser');

app.use(bodyParser.json())

// Milde wear

// Import the Routes

const postRoute = require('./Routes/posts')
const UserRoute = require('./Routes/users')

app.use('/posts', postRoute)
app.use('/users', UserRoute)

// Routes

// Get() => Fetch the data,  Post() => Push the data 
// Patch() => Update the data, Delete() => Delete the data,


app.get("/", (req, res) => {
   res.send('Im inside the Home')
})


// Conect to MongoDB

mongoose.connect( process.env.DB_CONNECTION, 
   console.log('Conected to MongoDB')
);


// Create a listening port

app.listen(5000)