const express = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors') 
const app = express();
const routes = require('./routes')
const morganBody = require('morgan-body');

const port = process.env.PORT || 5000;

morganBody(app)

app.use(express.json())
app.use(cors())
app.use('/', routes)

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
