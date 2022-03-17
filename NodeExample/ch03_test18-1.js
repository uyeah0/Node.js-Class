function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.game = function(gameName){
    console.log(gameName + '을(를) 즐겁게 플레이합니다.');
}
Person.prototype.dance = function(start, musicName){
    console.log(start + '분 동안 ' + musicName + '을(를) 열정적으로 춥니다.');
}
Person.prototype.music = function(start, musicName){
    console.log(start + '분 동안 ' + musicName + '을(를) 듣습니다.');
}
Person.prototype.meet = function(oPerson){
    console.log(this.name + "님은 " + oPerson + '과 사귑니다.');
}

let person01 = new Person('양정원', 19);
let person02 = new Person('박종성', 21);
let person03 = new Person('박정우', 19);
let person04 = new Person('3108유예영', 19);

console.log(person04.name + ' 객체의 game("lol")을 호출합니다.');
person04.game('lol');

console.log(person02.name + ' 객체의 dance(60, "Given-Taken")을 호출합니다.');
person02.dance(60, 'Given-Taken');

console.log(person03.name + ' 객체의 music(40, "직진")을 호출합니다.');
person03.music(40,'직진');

console.log(person01.name + ' 객체의 meet("유예영")을 호출합니다.');
person01.meet('유예영');