var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var server = http.createServer(function (req, res) {
    
    if (req.url == '/') {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url == '/submit') {
        var telo = "";
        req.on("data", function (podatak) { telo += podatak; });
        req.on("end", function () {
            var ime = qs.parse(telo).imePrezime;
            var godine = qs.parse(telo).brGodina;
            var pol = qs.parse(telo).pol;
            var string = { 'ime': ime, 'godine': godine, 'pol': pol };

            var imePattern = /^[A-Z][a-z '-.,]{0,31}$/;
            var godinePattern = /^[0-9]{0,2}$/;
            if (imePattern.test(ime) & godinePattern.test(godine) & pol.length > 0) {
                res.writeHead(200, { 'Content-Type': 'text/json'});
                res.end(JSON.stringify(string));
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('<b>404</b>');
            }
});
    };
}).listen(11000);