var options = {
    server: "localhost",
    port: 8888
}

var poruka = {
    poruka: "Neka JSON poruka za prenos!"
}
var net = require("net");

console.log("Povezivanje na server...");
var count = 0;
var client = net.connect(options, function () {
    
    

    var t = setInterval(function () {
        count++;
        client.write(JSON.stringify(poruka));

        if (count == 7) {           
            clearInterval(t);
        }
        
    }, 1000);
   
});

client.on("error", function (err) {
    console.log(err);
});

client.on("end", function () {
    console.log("Klijent se diskonektovao!");
});