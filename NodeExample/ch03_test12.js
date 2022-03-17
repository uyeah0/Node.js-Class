let Users = [{name:'양정원',age:19},{name:'박정우',age:19}];
console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);
Users.unshift({name:'티아라', age:23});
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);
Users.shift();

console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);
