const express = require('express');

const dotenv = require('dotenv').config();

const path = require('path');

const port = process.env.PORT || 5000 ;


const app = express();
//middleware, set static folder
app.use(express.static(path.join(__dirname, 'public')));


// Enabling body parser
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, ()=> console.log(`Server started on port ${port}`));