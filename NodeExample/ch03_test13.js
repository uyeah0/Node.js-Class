let Users = [{name:'양정원',age:19},{name:'박정우',age:19}, {name:'엔하이픈',age:2}];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);

Users.splice(1,0,{name:'애프터스쿨', age:25});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2,1);
console.log('splice()로 인덱스의 2의 요소를 1개 삭제한 후');
console.dir(Users);