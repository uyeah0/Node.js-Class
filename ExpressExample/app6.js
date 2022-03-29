const express = require("express");

let app = express();
let http = require('http');

// 미들웨어에서 redirect 메소드 사용
app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    let userAgent = req.header('User-Agent');
    let paramName = req.query.name;
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>User-Agent: ' + userAgent + '</p></div>');
    res.write('<div><p>Param name: ' + paramName + '</p></div>');
    res.write('<div><p>Accept : ' + req.header('Accept') +'</p></div>');
    res.write('<div><p>Connection : ' + req.header('Connection') + '</p></div>');
    res.end();
});

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})