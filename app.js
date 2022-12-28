
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(cors());
app.options('*', cors());


// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Connect DB
mongoose.connect(process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => { console.log('Database Connection is ready...')}).catch((err) => { console.error(err)});

// Server
const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => {
    console.log(`server is running ${port}`);
})