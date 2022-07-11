// imports
import express from 'express';
import './data/mongodb.js';

// init express
const app = express();
app.use(express.json());
const port = process.env.PORT;

// run server
app.listen(port, () => console.log('server is running on localhost port ' + port));