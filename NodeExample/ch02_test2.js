<<<<<<< HEAD
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if(process.argv.length>2){
    console.log('세번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item, index){
    console.log(index + ':', item);
});

console.dir(process.env);

=======
console.log('argv 속성의 파라미터 수 : ' + process.argv.length);
console.dir(process.argv);

if(process.argv.length>2){
    console.log('세번째 파라미터의 값 : %s', process.argv[2]);
}

process.argv.forEach(function(item, index){
    console.log(index + ':', item);
});

console.dir(process.env);

>>>>>>> 3020f2881d00942711332eb836a9aec375705dd8
console.log('OS 환경변수의 값: ' + process.env['OS']);