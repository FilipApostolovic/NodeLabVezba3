var serverPort = 8888;
var net = require("net");

var server = net.createServer(function (client) {
    console.log("Klijent se povezao na server!!!");
    client.on("data", function (data) {
        console.log("Primljeni podaci:" + data.toString());        
    });
    client.on("end", function () {
        console.log("Klijent je diskonektovan!!!");
    });
});

server.on("error", function (err) {
    console.log(err);
    server.close();
});

server.listen(serverPort, function () {
    console.log("Server Startovan na portu:" + serverPort);
});