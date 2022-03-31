// Express 기본 모듈 불러오기
let express = require('express'), http = require('http'), path = require('path');

// Express의 미들웨어 불러오기
let bodyParser = require('body-parser'), static = require('serve-static');
const res = require('express/lib/response');

// 객체 생성
let app = express();

// 기본 속성 설정
app.set('port',process.env.PORT||3000);

// body-parser를 이용해 application/x-www.form.urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

//app.use('/public',static(path.join(__dirname, 'public')));
app.use(static(path.join(__dirname, 'public')));

// 미들웨어에서 파라미터 확인
app.use(function(req, res, next){
    console.log('첫 번째 미들웨어에서 요청을 처리함.');

    // app.use()
    // redirect에서는 ./또는 /이 public을 가리킴(앞에서 선언에 따라)

    // index.html이 있는 경우
    // res.redirect('/'); // =>index가 나옴
    // http://localhost:3000
    res.redirect('/');

    // login.html이 있는 경우
    //res.redirect('/login.html'); // login.html이 나옴
    //res.redirect('./login.html'); // login.html이 나옴
    // http://localhost:300/login.html
});

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})