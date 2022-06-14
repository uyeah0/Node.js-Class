exports = {
    getUser:function(){
        return {id:'test01', name:'소녀시대'};
    }, 
    group:{id:'group01', name:'친구'}
}

// user1.js의 코드는 exports에는 속성만 추가 : 가능
// user2.js의 코드는 객체를 할당 : 불가능(오류나는 경우)
// Reason : exports에 속성을 추가하면 모듈에서 접근하지만,
// exports에 객체를 할당하면 자바스크립트에서 새로운 변수로 처리함