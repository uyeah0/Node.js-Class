let result = 0;

console.time('duration_sum');
for(let i = 1; i <= 1000; i++){
    result += i;
}
console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);

console.log('현재 실행한 파일의 이름 : %s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);

// dir() 메소드 사용하기
let Person = {name:"양정원", age:19};
console.dir(Person);