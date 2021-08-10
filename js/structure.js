
var value = 120;
var arr = [];
arr[0] = [1,2,3,4,5,6,7,9];
arr[1] = ['william','jang','standfod'];
arr.push('mario');
console.log(arr[2]);
arr.pop();
console.log(arr.lenght);

// 여러 개의 데이터들
var csv = ',,,,,';
var qry = 'name=value&parm=11%loc=kr'; // 
var json = '{name:value, parm:11, loc:[kr,en]}'; // 어떤 놈은 정수고 어떤놈은 string이고 타입을 구별하는 표기법이 필요 즉 데이터를 구체화 하는것
var obj = {
    name : 'jang',
    method : function(){

    },
};
obj.name;
obj.method();

// 역할
// Event, DOM controll
// 요소를 선택 기준 : tag -> list, class -> list, id -> one


// 이벤트 핸들러 등록
addEventListener('click', function(){

}) 