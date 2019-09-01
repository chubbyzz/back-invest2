const express = require('express');
const routes = require("./routes");
const mongoose = require('mongoose');
const server = express();

mongoose.connect('mongodb+srv://manager:dev123@cluster0-q2gyv.mongodb.net/invest?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);