// example 1
console.log(a); // undefined
var a = 5;


// example 2
var b = 10;
function test() {
    console.log(b); //  undefined
    var b = 20;
    console.log(b); //  20
}
test();

//example 3
var a = 1;

function one(){
  console.log(a); // undefined
  if(true){
    var a = 2;
  }
  console.log(a);// 2
}

one(); 
console.log(a); // 1
