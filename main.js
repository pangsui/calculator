
function add(a,b){
 let answer =  document.getElementById('display').value = a + b;

 return answer;
}
function substract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}
function power(a,b){
    return Math.pow(a,b);
}
function operate(operator,a,b){
    var operator;
    if(operator== '+'){
     return add(a,b);
    }else if(operator == '-'){
        return substract(a,b);
    }else if(operator == '*'){
        return multiply(a,b);
    }else if(operator=='/'){
        return divide(a,b);
    }
   
 }
 function one(){
  let first= document.getElementById("display").value += 1;
 console.log(first)
}
 function two(){
   document.getElementById("display").value += 2;
 }
 function three(){
    document.getElementById("display").value += 3;
}
function four(){
    document.getElementById("display").value += 4;
}
function five(){
    document.getElementById("display").value += 5;
}
function six(){
    document.getElementById("display").value += 6;
}
function seven(){
    document.getElementById("display").value += 7;
}
function eight(){
    document.getElementById("display").value += 8;
}
function nine(){
    document.getElementById("display").value += 9;
}
function zero(){
    document.getElementById("display").value += 0;
}
function addition(){
    document.getElementById("display").value += '+';
     plus = '+';
    return plus;
}
function subtraction(){
    document.getElementById("display").value += '-';
}
function times(){
    document.getElementById("display").value += '*';
}
function divides(){
    document.getElementById("display").value += '/';
}
function decimal(){
    document.getElementById("display").value += '.';
}
