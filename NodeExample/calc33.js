let util = require('util');
let EventEmitter = require('events').EventEmitter;

let Calc = function(){
    this.on('start', function(){
        console.log('Calc에 start event 전달');
    });
    this.on('subtitle', function(title){
        console.log('계산기 이벤트 발생함 : %s', title);
    });
    this.on('cal', function(a,b){
        console.log('계산기 이벤트 발생함 : %s', a,b);
    });
}

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a,b){
    return a+b;
}
Calc.prototype.substract = function(a,b){
    return a-b;
}
Calc.prototype.multiply = function(a,b){
    return a*b;
}
Calc.prototype.divide = function(a,b){
    return a/b;
}

module.exports = Calc;
module.exports.title = 'constructor';