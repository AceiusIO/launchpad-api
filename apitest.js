const http = require('http');
const os = require('os');
const fs = require('fs');
const port = 7000

let password = 1234

const server = http.createServer(function (req, res) {
    if (req.url == '/auth') {
        
        console.log("[auth] __dirname returned " + __dirname + ", requested url is " + req.url);

        console.log(req.headers);
        if (req.headers.authorization == "1234") {
            res.writeHead(200, {'Content-Type': 'text'});
            res.write('accepted');
            res.end();

            console.log('[INFO] Authorized');
        } else {
            res.writeHead(403, {'Content-Type': 'text'});
            res.write('denied');
            res.end();

            console.log('[INFO] Access denied');
        }
    } else if (req.url == '/fire') {
        
        console.log("[fire] __dirname returned " + __dirname + ", requested url is " + req.url);

        console.log(req.headers);
        if (req.headers.authorization == "1234") {
            res.writeHead(200, {'Content-Type': 'text'});
            res.write('starting show');
            res.end();

            console.log('[INFO] Starting show');
        } else {
            res.writeHead(403, {'Content-Type': 'text'});
            res.write('did you just try to start the show early? you sick fu-');
            res.end();

            console.log('[INFO] Access denied');
        }
    } else {

        fs.readFile(__dirname + '/dist/' + req.url, function (err,data) {
            console.log("[Dynamic] __dirname returned " + __dirname + ", requested url is " + req.url);

            try {
                if (err) {
                    res.writeHead(404);
                    res.end(JSON.stringify(err));
                    return;
                }

                res.writeHead(200);
                res.end(data);
            } catch (err) {
                console.error(err);
            }
        });

    }
});

const interfaces = os.networkInterfaces();
let addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

console.clear();
console.log('[INFO] Starting webserver on port ' + port);
server.listen(port);
console.log('[INFO] Webserver running on port ' + port);
//console.log(server.address().address);
console.log(addresses);