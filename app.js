

const { clear } = require('console');
const http = require('http')
console.log(clear);
const server = http.createServer((req, res) => {
    res.write('<h1>Hello World</h1>')
    res.end()
}).listen(8081)

console.log('Listening on port 8081');