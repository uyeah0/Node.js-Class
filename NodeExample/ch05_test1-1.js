let http = require('http');

let server = http.createServer();

let host = '10.96.124.8';
let port = 3000;

server.listen(port, host, '50000', function(){
    console.log('웹 서버가 시작되었습니다. -> ' +  host + ' : ' + port);
}); // 50000은 한번에 접속할 수 있는 클라이언트의 수