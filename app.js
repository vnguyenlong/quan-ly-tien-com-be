
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const path = require('path');
dotenv.config({path: '.env'})


const app = express();

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json({ limit: '2mb' }));
app.use(morgan('tiny'));

// Connect DB
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/datas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log('Database Connection is ready...')}).catch((err) => { console.error(err)});

// Server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})