<<<<<<< HEAD
// Javascript function 

function show(){
    var count = 67;
    count++;
    console.log(count);
}

function display(company){

    console.log("Company name =" + company);
}

function addition(num1 , num2){
    var result = num1 + num2;
    console.log("Result = "+ result);
}

show(); // invoking javascript function

var provider = "Transflower";
display(provider);
addition(10,20);

var number1 = 45;
var number2 = 55;
var total = addition(number1, number2);

console.log("Total = " + total);
