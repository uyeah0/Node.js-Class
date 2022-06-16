// 생성자 함수
function User(id, name){
    this.id = id;
    this.name = name;
}

User.prototype.getUser = function(){
    return {id : this.id, name:this.name};
}
User.prototype.group = {id:'group1', name:'소프트웨어과'};

User.prototype.printUser =function(){
    console.log('user 이름 : %s, group 이름 : %s', this.name, this.group.name);
}

exports.user = new User('3108', '유예영');