const express = require('express');
const path = require('path');
const app = express();

const http = require('http');

app.use(express.static(path.join(__dirname, './build')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/*', function (req, res) {
    console.log(path.join(__dirname, './build', 'index.html'));
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});

const httpServer = http.createServer(app);

httpServer.listen(80, function () {
    console.log('Server started ... listening on port 80!');
});
