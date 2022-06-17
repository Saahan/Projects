console.log("hello")

// functions to take value from number input boxes

function getVal1(){
    var x=document.getElementById("input1");
    return x.value;
}

function getVal2(){
    var y=document.getElementById("input2");
    return y.value;
}

 let a=+getVal1(), b=+getVal2();   

// Random number generator to do random operations on input 1 and input 2

var op = Math.floor((Math.random()*4 + 1));

// Function to return output number based on random operation

function output(){
if (op==+1){
   return a+b;
}
else if (op==+2){
   return a-b;
}
else if (op==+3){
  return a*b;
}
else return a/b;
}

// Display when the output is calculated
if (isNaN(getVal1()) || isNaN(getVal2()) || getVal1() == 0 || getVal2() == 0)
{document.getElementById("result").innerHTML = "No Numbers Entered";}
else
document.getElementById("result").innerHTML = "Calculated";

// Function to read guessed number from input field and compare it to output and display result

function getAnswer()
{
    var x=document.getElementById("answer");
    return x.value;
}

function answercheck()
{
if (getAnswer()==output().toFixed(1))
{
    alert ("Correct Answer!");
}
else 
{
    alert (`Incorrect Answer! The calculated value was ${output()}`);
}
}
// I have rounded off the output to one decimal point in case of a division random operation



// Script for options instead of a number-guessing field


// function answercheck()
// {
//     if (document.getElementById("input1").value != 0 && document.getElementById("input2").value != 0)
// {
// if (op==1 && document.getElementById("Add").checked == true)
// {
//     alert(`Correct! The calculated value was ${output()}`);
// }
// else if (op==2 && document.getElementById("Sub").checked == true)
// {
//     alert(`Correct! The calculated value was ${output()}`);
// }
// else if (op==3 && document.getElementById("Mul").checked == true)
// {
//     alert(`Correct! The calculated value was ${output()}`);
// }
// else if (op==4 && document.getElementById("Div").checked == true)
// {
//     alert(`Correct! The calculated value was ${output()}`);
// }
// else alert(`Incorrect Answer! The calculated value was ${output()}`)
// }

// else if (document.getElementById("Add").checked == false && document.getElementById("Sub").checked == false && document.getElementById("Mul").checked == false && document.getElementById("Div").checked == false)
// {
//     alert("Please Select an Option")
// }
// else
// {
//     alert("Please Enter Numbers First :)")
// }
// }