let http = require('http');

http.createServer(function (req, res){ // 요청객체 응답객체 
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<h1>Hello World!</h1>'); // write, end = 한쌍
    res.end();
}).listen(3000);