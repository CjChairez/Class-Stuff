const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'ContentType': 'text/plain'});
    res.end("Hello World!\n");
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running at local host');
});