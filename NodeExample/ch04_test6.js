let fs = require('fs');

// 파일을 동기식 IO 방식으로 읽어들입니다.
fs.readFile('./package.json', 'utf-8', function(err, data){
    console.log(data);
    console.log('package.json 파일 데이터 읽기 완료')
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');