const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const authUser = require('./routes/authUser');
const restaurantRoute = require('./routes/restaurantRoute')
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/auth', authUser);
app.use('/api/',restaurantRoute)
const PORT = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/testxx1')
    .then(() => {
        console.log('MongoDB connected');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    }).catch(err => console.log(err));