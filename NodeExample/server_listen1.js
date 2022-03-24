let http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'}); // 한글 출력하려면 utf-8 필요
    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title> 응답 페이지 </title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<h1>노드제이에스로부터의 응답 페이지 : silverlisten-1.js</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}).listen(3000);