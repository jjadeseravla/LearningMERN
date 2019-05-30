const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//bodyParser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
