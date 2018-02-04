var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.url == '/1') {
        fs.readFile('./public/index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url == '/2') {
        fs.readFile('./public/index2.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
}).listen(10000);