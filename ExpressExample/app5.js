const express = require("express");

let app = express();
let http = require('http');

// 미들웨어에서 redirect 메소드 사용
app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    res.redirect('http://google.co.kr'); // redirect: 웹 페이지 경로를 강제로 이동시킴
});

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})