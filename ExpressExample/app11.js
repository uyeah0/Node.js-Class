/**
 * cookie parser 미들웨어 사용하기
 * 
 * 웹브라우저에서 아래 주소로 요청
 *    http://localhost:3000/process/showCookie
 *    http://localhost:3000/process/setUserCookie
 */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http')
  , path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser')
  , cookieParser = require('cookie-parser')
  , static = require('serve-static')
  , errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');


// 익스프레스 객체 생성
var app = express();

// 기본 속성 설정
app.set('port', process.env.PORT || 3000);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

app.use('/public', static(path.join(__dirname, 'public')));

// cookie-parser 설정
app.use(cookieParser());


// 라우터 사용하여 라우팅 함수 등록
var router = express.Router();

router.route('/process/setUserCookie').get(function(req, res) {
	console.log('/process/setUserCookie 호출됨.');

	// 쿠키 설정
	res.cookie('user', {
		id: 'sunny',
		name: '소녀시대',
		authorized: true
	});
	
	// redirect로 응답
	res.redirect('/process/showCookie');
});

router.route('/process/showCookie').get(function(req, res) {
	console.log('/process/showCookie 호출됨.');
    //쿠키 확인
	res.send(req.cookies);// req는 요청객체가 가지고 있음, 서버가 가지고 있지 않음
});


app.use('/', router);


// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
      '404': './public/404.html'
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
