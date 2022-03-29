const express = require("express");
let http = require('http');

// 익스프레스 객체 생성
let app = express();

// 미들웨어에서 응답 전송할 때 send 메소드 사용하여 JSON 데이터 전송
app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    let person = {name:'양정원', age:19};
    // res.send(person);

    let personStr = JSON.stringify(person);
    // res.send(personStr);

    res.writeHead('200', {"Content-Type":"application/json; charset=utf8"});
    res.write(personStr);
    res.end();
});

// Express 서버 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
});