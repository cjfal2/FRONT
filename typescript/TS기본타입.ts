// str
let car:string = "bmw"
// num
let age:number = 30;
// boolean
let isAdult:boolean = true;

// Array 배열
let a1:number[] = [1, 2, 3];
let a2:Array<number> = [1, 2, 3];

let week1:string[] = ['mon', 'tue', 'wed'];
let week2:Array<string> = ['mon', 'tue', 'wed'];

// 튜플 (Tuple)
let b:[string, number]
b = ['z', 1]
// b = [1, 'z'] => 안됨

b[0].toLowerCase()

// void => 주로 아무것도 반환하지 않는 함수에 사용
function showError():void{
  console.log("not")
}
// never => 주로 에러를 나타내거나 무한루프를 도는 함수에 사용
function showError2():never {
  throw new Error()
}
function infLoop():never {
  while (true) {
    console.log()
  }
}

// enum => 비슷한 값끼리 묶어줬다고 생각하면 됨
// enum은 수동으로 값을 주지 않으면 자동으로 0부터 시작
// 양방향 바인딩이 되어있음
enum Os {
  Window = 'win',
  Ios = 'ios',
  Android = 'and'
}

let myOs:Os;

myOs = Os.Window
console.log(myOs)

// null, undefined
let aa:null = null
let bb:undefined = undefined

