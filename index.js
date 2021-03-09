const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');
const { v4: uuidv4 } = require("uuid");

server.use(express.json());
server.use(cookieParser());

server.use((req, res, next) => {
    if (req.cookies.session !== undefined) {
        next();
    } else {
        res.cookie("session", uuidv4(), { maxAge: 99999999999 });
        next();
    }
});

server.use(express.static(__dirname + '/public'));

server.listen(8080);
