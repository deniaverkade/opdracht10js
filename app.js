var answer = document.getElementById("antwoordis");

var num1 = document.getElementById("num1").value;
var num1 = Number(num1);
var num2 = document.getElementById("num2").value;
var num1 = Number(num2);

function multiply() {
    var result = num1*num2;
    answer.innerHTML("Het antwoord is: "+ result);
};

function divide() {
    var result = num1/num2;
    answer.innerHTML("Het antwoord is: "+ result);
};

function add() {
    var result = num1+num2;
    answer.innerHTML("Het antwoord is: "+ result);
};

function minus() {
    var result = num1-num2;
    answer.innerHTML("Het antwoord is: "+ result);
};