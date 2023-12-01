import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('안뇽');
});

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
})