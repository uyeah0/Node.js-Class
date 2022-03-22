let Calc = require('./calc3');

let calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 ')