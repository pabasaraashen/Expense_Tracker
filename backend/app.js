const express = require('express');
const cors = require('cors');
const e = require('cors');
// load .env from this backend folder explicitly so dotenv works no matter where node is started from
require('dotenv').config({ path: __dirname + '/.env' });
const db = require('./db/db');
const app = express();

const PORT = process.env.PORT

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log('listening on port ',  PORT);
    });
}

server();