let fs = require('fs');

// 파일을 동기식 IO 방식으로 읽어들입니다.
let data = fs.readFileSync('./package.json', 'utf-8');

// 읽어 들인 데이터를 출력합니다.
console.log(data);