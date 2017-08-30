// Tsk 1
var event = prompt("Do you have to meet with someone?");
var person = "John Snow";
var time = "16:00";
var date = "Dec/16/1246";
var day = "Sunday";
var place = "DragonStone";

function resultTsk1() {
    return (person + " have a meeting with " + event + " in " + place + " on " + day + " " + date + " at " + time);
}
console.log(resultTsk1());
document.getElementById('tsk1').innerHTML=resultTsk1();

// Tsk2

const USD = 25.6692;
const EUR = 30.6879;
const EURvsUSD = 1.17;
var usdInput = prompt("USD");
var eurInput = prompt("EUR");

console.log(resultMoneyCalc());

function resultMoneyCalc() {
    return (eurInput + " Euros are equal " + eurInput * EUR + " UAH, "+ 
    usdInput + " Dollars are equal " + usdInput * USD + " UAH, "  +
    "one Euro is equal " + EURvsUSD + " Dollars.");
}
document.getElementById('tsk2').innerHTML=resultMoneyCalc();