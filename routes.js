const express = require("express");
const routes = express.Router();

routes.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/memory_game.html');
});

module.exports = routes;