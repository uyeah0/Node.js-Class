let output = '안녕 1!';
let buffer1 = new Buffer(10);
let len = buffer1.write(output, 'utf-8');
console.log('첫번째 버퍼의 문자열 : %s', buffer1.toString());

// 버퍼 객체를 문자열을 이용해 만듭니다.
let buffer2 = new Buffer('안녕 2!', 'utf-8');
console.log('두번째 버퍼의 문자열 : %s', buffer2.toString());

// 타입을 확인합니다.
console.log('버퍼 객체의 타입 : %s', Buffer.isBuffer(buffer1));

// 버퍼 객체에 들어있는 문자열 데이터를 문자열 변수로 만듭니다.
let byteLen = Buffer.byteLength(output);
let str1 = buffer1.toString('utf-8',0,byteLen);
let str2 = buffer2.toString('utf-8');

// 두번째 버퍼 객체의 문자열에 첫 번째 버퍼 객체를 복사합니다
buffer1.copy(buffer2, 0, 0, len);
console.log('두 번재 버퍼에 복사한 후의 문자열 : %s', buffer2.toString('utf-8'));

// 두 개의 버퍼를 붙여줍니다.
let buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('두 개의 버퍼를 붙인 후의 문자열 : %s', buffer3.toString('utf-8'))