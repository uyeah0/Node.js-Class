// 프로토타입 객체
function Person(name, age){
    this.name = name;
    this.age = age;
    // walk
}

Person.prototype.walk = function(speed){
    console.log(speed + 'km 속도로 걸어갑니다.');
}

let person01 = new Person('엔하이픈', 19);
let person02 = new Person('양정원', 19);

console.log(person02.name + ' 객체의 walk(10)을 호출합니다.');
person02.walk(20);