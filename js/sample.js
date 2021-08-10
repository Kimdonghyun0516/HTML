
// // 출력하기
// /*
//     어디로 무엇을
//     콘솔탭 문자열
// */
// console.log('first output');
// // 화면에 문자열을
// document.write('second output');

// // 입력받기
// var value = prompt('첫번째입력', 'placeholder'); // JS는 기본적으로 데이터를 string형태로 입력 받는다.
// console.log( typeof(value) );

// var result = Number(value) +10;
// console.log( result );


// scope 
// JS 함수 위주의 scope를 가진다.
var v1;  // 예약어를 붙인           -변수    초기화가 되지 않더라도 변수 자체는 생성이된다.   """예약어가 붙는 친구들은 지역변수라고 생각하면 된다.""""
{
    v2 = 2;          // 예약어(=키워드)를 붙이지 않음    -변수    즉 값은 미리 넣어줘야 생성이 변수가 생성된다.  
    let v3;          //                                  -변수    초기화가 되지 않더라도 변수 자체는 생성이된다.
    const v4 = 4 ;   // - 함수  const 키워드는 값을 넣어야 한다.
    console.log(v1, v2, v3, v4);
    v3 = v1 + v2;
    console.log( v3 );
}     
console.log( v2 );
console.log( v3 );

