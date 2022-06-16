var require = function(){
    var exports = {
        getUser: function(){
            return {id:'3108', name: '분리전_유예영'};
        }, 
        group : {id:'group01', name:'소프트웨어과'}
    }
    return exports;
}

var user = require();
function showUser(){
    return user.getUser().name + ', ' + user.group.name;
}
console.log('사용자 정보 : %s', showUser());