let Users = [{name:'양정원',age:19},{name:'박정우',age:19}, {name:'하루토',age:19}, {name:'윤재혁', age:22}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

let Users2 = Users.slice(1,3);

console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

let Users3 = Users2.slice(1);

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);