const server = require('http');
const os = require('os');
const greetingModule = require('./personalmodule');
const currentUserName = os.userInfo().username;

server.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`${greetingModule.greeting(currentUserName)}`);
}).listen(5000);