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
router.route('/process/users/:id').post(function(req, res){
    console.log('/process/users/:id 처리함.');

    let paramId = req.params.id;

    console.log('/process/users와 토큰 %를 이용해 처리함.', paramId);
    
    let paramName = req.body.name || req.query.name;
    let paramPassword = req.body.password || req.query.password;

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
    res.write('<div><p>Param id: '  + paramId + '</p></div>');
    res.write('<div><p>Param name: '  + paramName + '</p></div>'); 
    res.write('<div><p>Param password: '  + paramPassword + '</p></div>');
    res.write("<br><br><a href = '/public/login4.html'>로그인 페이지로 돌아가기</a>");
    res.end( );
});

// 라우터 객체를 app 객체에 등록
app.use('/', router);

let expressErrorHandler = require('express-error-handler');

let errorHandler = expressErrorHandler({
    static:{
        '404':'./public/404.html'
    }
});

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

// app.all('*', function(req, res){
//     res.status(404).send('<h1>ERROR - 페이지를 찾을 수 없습니다.</h1>');
// });

http.createServer(app).listen(3000,function(){
    console.log('Express 서버가 3000번 포트에서 시작됨.');
})