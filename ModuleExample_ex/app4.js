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

// Session 미들웨어 불러오기
var expressSession = require('express-session');

var user = require('./routes/user'); 


// 모듈로 분리한 설정 파일 불러오기  추가 app3.js 
var config = require('./config');

// 모듈로 분리한 데이터베이스 파일 불러오기
var database_loader1 = require('./database/database_loader'); //추가 app4.js
 
// mongoose 모듈 사용
var mongoose = require('mongoose');

// crypto 모듈 불러들이기
var crypto = require('crypto');


// 익스프레스 객체 생성
var app = express();


// 기본 속성 설정
app.set('port', config.server_port || 3000); //app3.js  변형

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }))

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json())

// public 폴더를 static으로 오픈
app.use('/public', static(path.join(__dirname, 'public')));
 
// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
	secret:'my key',
	resave:true,
	saveUninitialized:true
}));



//===== 데이터베이스 연결 =====//

// 데이터베이스에 연결

// user 스키마 및 모델 객체 생성

//===== 라우팅 함수 등록 =====//

// 라우터 객체 참조
var router = express.Router();

// 4. 로그인 처리 함수를 라우팅 모듈을 호출하는 것으로 수정
router.route('/process/login').post(user.login);


// 5. 사용자 추가 함수를 라우팅 모듈을 호출하는 것으로 수정
router.route('/process/adduser').post(user.adduser);


// 6. 사용자 리스트 함수를 라우팅 모듈을 호출하는 것으로 수정
router.route('/process/listuser').post(user.listuser);


// 라우터 객체 등록
app.use('/', router);



// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
 static: {
   '404': './public/404.html'
 }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


//===== 서버 시작 =====//

// 프로세스 종료 시에 데이터베이스 연결 해제
process.on('SIGTERM', function () {
    console.log("프로세스가 종료됩니다.");
    app.close();
});

app.on('close', function () {
	console.log("Express 서버 객체가 종료됩니다.");
	if (database) {
		database.close();
	}
});

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
  console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));

  // 데이터베이스 연결을 위한 함수 호출
  /*connectDB(); app4.js 주석처리 */
	database_loader1.init(app, config);  // app4.js 추가
  // database.js의 모듈을 불러들이면서 정보를 가져옴 
});