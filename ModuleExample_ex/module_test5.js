// require() 메소드는 함수를 반환함
var user = require('./user5');

function showUser(){
    return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보 : %s', showUser());

// require() 메소드는 함수를 리턴함