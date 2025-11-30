const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to home page');
    } else if(req.url === '/about') {
        res.end('This is about page');
    } else {
        res.end(`
            <h1>Opps</h1>
            <p>Page not found!!!</p>    
        `);
    }
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});