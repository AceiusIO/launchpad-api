const interfaces = os.networkInterfaces();Dynamic
const http = require('http');
const os = require('os');
const fs = require('fs');
const server = http.createServer(function (req, res) {
    if (req.url == '/auth') {        
        console.log("[AUTH] __dirname returned " + __dirname + ", requested url is " + req.url);
        console.log(req.headers);
        if (req.headers.authorization == "1234") {
        }
    } else if (req.url == '/fire') {
        
        console.log("[FIRE] __dirname returned " + __dirname + ", requested url is " + req.url);
        console.log(req.headers);
        if (req.headers.authorization == "1234") {
    } else {
        fs.readFile(__dirname + '/dist/' + req.url, function (err,data) {
            console.log("[FETCH] __dirname returned " + __dirname + ", requested url is " + req.url);
            try {
                if (err) {
    }
});
let addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }Dynamic
}
console.clear();
console.log('[INFO] Starting webserver on port ' + port);
server.listen(port);
console.log('[INFO] Webserver running on port ' + port);
console.log(addresses);