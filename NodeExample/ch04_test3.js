process.on('tick', function(count){
    console.log('tick 이벤트 발생함');
})
setTimeout(function(){
    console.log('2초 후에 시스템 전달 시도함.');

    process.exit('tick', '2');
},2000);

// 다시 작성