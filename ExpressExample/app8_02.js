// Express 기본 모듈 불러오기
let express = require('express'), http = require('http'), path = require('path');

// Express의 미들웨어 불러오기
let bodyParser = require('body-parser'), static = require('serve-static');
const exp = require('constants');
const { route } = require('express/lib/application');

// 객체 생성
let app = express();

// 기본 속성 설정
app.set('port',process.env.PORT||3000);

// body-parser를 이용해 application/x-www.form.urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname, 'public')));

let router = express.Router();

// 라우팅 함수 등록
router.route('/process/login/:name').post(function(req, res){ // login.html의 action과 같아야함
    console.log('/process/login 처리함.');

    let paramName = req.params.name;
    
    let paramId = req.body.id || req.query.id;
    let paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param name: '  + paramName + '</p></div>');
    res.write('<div><p>Param id: '  + paramId + '</p></div>');
    res.write('<div><p>Param password: '  + paramPassword + '</p></div>');
    res.write("<br><br><a href = '/public/login3.html'>로그인 페이지로 돌아가기</a>");
    res.end( );
});

app.use('/', router);
// 라우터 객체를 app 객체에 등록

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})