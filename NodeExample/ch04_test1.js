let url = require('url'); 
// 주소 문자열을 URL 객체로 만들기
let curURL = url.parse('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=popcorn');
// URL 객체를 주소 문자열로 만들기
let curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);
// 요청 파라미터 구분하기 

let querystring = require('querystring');
let param = querystring.parse(curURL.query);
console.log('요청 파라미터 중 query의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));
// 문자열로 변환해서 출력하기