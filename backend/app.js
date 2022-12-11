import express from 'express';
import { mongoose as _mongoose } from 'node-restful';
const server = express();
const mongoose = _mongoose;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Teste
server.get('/', (req, res, next) => res.send('Backend'));

// Star Server
server.listen(3000);