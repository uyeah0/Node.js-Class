// Express 기본 모듈 불러오기
let express = require('express'), http = require('http'), path = require('path');

// Express의 미들웨어 불러오기
let bodyParser = require('body-parser'), 
static = require('serve-static');
let errorHandler = require('errorhandler');
let cookieParser = require('cook-parser');

// 객체 생성
let app = express();

// 기본 속성 설정
app.set('port',process.env.PORT||3000);

// body-parser를 이용해 application/x-www.form.urlencoded 파싱
app.use(bodyParser.urlencoded({extended:false}));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

app.use('/public',static(path.join(__dirname, 'public')));

app.use(cookieParser());

let router = express.Router();
router.route('/process/setUserCookie').get(function(req, res){
    console.log('/process/setUserCookie 호출됨');

    // 쿠키 설정
     res.cookie('user',{
        id : "mike",
        name : '소녀시대',
        authorized: true
    });
    // redirect로 응답
    res.redirect('/process/showCookie');
    
});

router.route('/process/showCookie').get(function(req, res){
    console.log('/process/showCookie 호출됨.');

    res.send(req.cookies);
})

app.use('/', router);

let expressErrorHandler = require('express-error-handler');
const res = require('express/lib/response');

// let errorHandler = expressErrorHandler({
//     static:{
//         '404':'./public/404.html'
//     }
// });

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})