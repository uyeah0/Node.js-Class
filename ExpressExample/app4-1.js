let express = require("express");
const res = require("express/lib/response");
//const res = require("express/lib/response");
let http = require('http');

// 익스프레스 객체 생성
let app = express();

// 미들웨어에서 응답 전송할 때 send 메소드 사용하여 JSON 데이터 전송
app.use(function(req, res, next){

// 실습 1
//JSON 객체
// let person = {name:'소녀시대', age:20};
// res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
// res.end(person);
// X

// 실습 2
// let person ={name:'소녀시대',age:20};
// let personStr = JSON.stringify(person);
// res.writeHead('200', {'Content-Type':'application/json;charset=utf8'});
// res.end(personStr);
// O

// 실습 3
let person ={name:'소녀시대',age:20};
let personStr = JSON.stringify(person);
res.end(personStr);
// O

// 실습 4
// 데이터는 HTML 문자열
// let person ={name:'소녀시대',age:20};
// let personStr = JSON.stringify(person);
// res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
// res.end(personStr);
// O

// 실습 5
// let person ={name:'소녀시대',age:20};
// let personStr = JSON.stringify(person);
// res.send(personStr);
// O

// 실습 6
// let person ={name:'소녀시대',age:20};
// res.send(person);
// O

// 실습 7
// req.user = 'sunny';
// res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
// res.end('<h1>Express 서버에서 ' + req.user + '를 res,wirteHead와 end로 응답한 결과입니다.</h1>');
// O

// 실습 8
// req.user = 'sunny';
// res.send('<h1>Express 서버에서 ' + req.user + '를 send로 응답한 결과입니다.</h1>');
// O
});
    

// Express 서버 시작
http.createServer(app).listen(3000, function(){
    console.log('Express 서버가 3000번 포트에서 시작됨');
})