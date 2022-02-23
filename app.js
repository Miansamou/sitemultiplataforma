const express = require("express");
const app = express();
const http = require('http');
const reload = require('reload');
const port = 3000;

var routes = require('./routes');
app.use('/', routes);

const server = http.createServer(app);
server.listen(port, function() {
    console.log("Servidor online")
});
reload(app);