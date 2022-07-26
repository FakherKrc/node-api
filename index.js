const express = require('express');
const app = express();
require('./model/dbConfig');
const cors = require('cors');
const bodyParser = require("body-parser");
const post = require('./Controler/postController');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());
app.use('/', post);

app.listen(5500, () => console.log("Serveur started"));
