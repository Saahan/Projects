
//declare two number variables

var num1 = 10;
let num2 = -2.5;

let str1 = "This isn't too bad";
var str2 = "this is a double qoute \" ";

var str3 = "This is line 1. \r\n This is line 2";

var noVal = null;

var str4 = "This is easy";

let starStr = "-";
let starRepeatStr = starStr.repeat(30);


console.log("value of num1 is : ", num1);
console.log("Value of Num2 " + num2);

console.log( str1.concat(" ",str2) );


console.log(str2);


var str5 = str4.toUpperCase();

//document.write(str3);

//alert(str3);
console.log(starRepeatStr,"Divide",starRepeatStr);

console.log(noVal);
console.log("The length of str4 is ", str4.length);
console.log("The char at last position is ", str4.charAt(str4.length-1));

console.log("The first index of s is ", str5.indexOf("S"));
console.log("The last index of s is ", str4.lastIndexOf("S"));


let concatStr = str1.concat(" ", str2);




console.log(starRepeatStr,"Start substr",starRepeatStr);


//substr(startIndex, number of chars) : 
let shortStr1 = concatStr.substr(6,-5);

console.log(concatStr);
console.log(shortStr1);

//substring
let shortStr2 = concatStr.substring(5,-3);
console.log(shortStr2);

let shortStr3 = concatStr.slice(5,11);

console.log(shortStr3);

//match
console.log(starRepeatStr,"Match",starRepeatStr);

let matchStr = concatStr.match(/This/gi);

console.log("match str is " + matchStr.length);

var newConcatStr = concatStr.replace(/This/gi,"That");

console.log(newConcatStr);


//Mathematical operators (+,-,*,/, %)

let num3 = 25;
let num4 = 5;
let num5 = 3;

let num6 = "30";
let num7 = "10";

console.log(starRepeatStr,"Mathematical operators",starRepeatStr);




console.log(num3 , '+', num4, num3 + num4 );

console.log(num3 + "+" + num4 + " " + (num3 + num4) );

console.log(num6 + +num7);


console.log(num6 - num7);
console.log(num6 * num7);
console.log(num6 / num7);

console.log(num3 / num5); //division

console.log(5 % 2); //modulo % : shows remainder.


//Code from Day3 -----------------------------------------------


//parseInt and parseFloat


let num8 = 30;

console.log(parseInt(num8));


let str8 = "30";

let num9 = 40;
let str9 = "40";

console.log(num8 === str8);

console.log(num9 != str9);

console.log( num8 > num9 && num8 < 35 );

console.log( num8 > num9 || num8 < 35 );


//if age < 8 or going to grade 3

let age = 3;
let grade = 2;

let school = (age < 8 || grade < 3)?"Elementry" : "Not Elementry";

console.log(school);


//if else else if


let temp = "cold";
let rain = true;

if(temp == "warm" && rain)
{
	console.log("Warm but raining");
}
else if(temp == "warm" && !rain)
{
	console.log("Warm and not raining");
	
}
else if(temp == "cold" && rain)
{
	console.log("Cold and Raining");
}
else
{
	console.log("This is in the else statement");
	
}
	
console.log("after the if statement");


//Switch

let n = true;

switch(n)
{
	case true:
		console.log("value is 1");
		break;
	
	case false: 
		console.log("value is 2");
		break;
	default:
		console.log("Default case");
}


//let name = prompt("What is your name");

//console.log(name + 1);


let x = 1;
let y = 5;

//let random = Math.floor((Math.random()*11)) + 1;

//let random =    Math.floor(Math.random() * y) + x; // this will be both x and y inclusive

//let random =    Math.floor(Math.random() * (y-x + 1 ) ) + x; // this will be  x inclusive and y inclusive

let random =    Math.floor(Math.random() * (y-x) ) + x; // this will be  x inclusive and y exclusive

//console.log(random);


if(random == 1)
{
	console.log("Addition");
}
else if(random == 2)
{
	console.log("Substraction");
}
else
{
	console.log("None");
}


//function

function formating(ch,middle)
{
	let formatString = "XYZ";
	
  	console.log(ch);
	console.log(middle);
	console.log(ch);
	console.log(ch);
	
	myInnerFunction();
    
	function myInnerFunction()
	{
		console.log("Hello inner function");
	}
	
	
	return 10;
	//console.log("the end");
}







let r = formating("*******************","xxxxxxxxxxxxx","Test");

console.log(r);

console.log("This is javaScript function ");
formating("*******************","xxxxxxxxxxxxx");



formating("---------------------------");
console.log("This is javaScript function ");
formating("---------------------------");


function clicked(t)
{
	console.log(t);
	
}

/*
function processForm()
{
	console.log("in process form");
	
	let txt1 = document.getElementById("txt1").value;

	
	
	
}*/

//Array-------------------------------


let a1 = new Array("Calgary","Edmonton","",30);

/*
a1[0] = "Calgary";
a1[1] = "Edmonton";
a1[3] = 30;
*/

console.log(a1);

//preferred option

let a2 = [];
console.log(a2);


let a3 = new Array(10);
a3[11] = "John";
console.log(a3.length);




//let val1 = prompt("Enter your value");


let arr1 = [];

function addValueToArr()
{
	let val1 = document.getElementById("val1Txt").value;

	if(isNaN(+val1))
	{
		console.log("Val1 is not a number");
		console.log(arr1);
	}
	else
	{
		//arr1[0] = +val1;
		
		arr1.push(+val1);
		
		//arr1.unshift(+val1);
		
		console.log(arr1);
	}
	
	
	document.getElementById("val1Txt").value = "";
	
	//document.getElementById("val1Txt").clear;
	
	
	
}

function getValueFromArr()
{
	if(arr1.length > 0)
	{
		console.log(arr1.pop());
		console.log(arr1.length);
	}
	else
	{
		document.getElementById("getBtn").disabled = true;
		console.log("No more elements");
	}
}



//let hello = function(name){console.log("Hello ",name); };

let hello = function(name){return "Hello " + name };
let hi = function(name){return "Hi " + name };
let Hola = function(name){return "Hola " + name };

console.log(hello("Adnan"));

let arr2 = [];

arr2[0] = hello;
arr2[1] = hi;
arr2[3] = Hola;


console.log(typeof arr2[0]);

//array of Cars

let carsArray = [];

carsArray[0] = [];
carsArray[1] = [];
carsArray[2] = [];



carsArray[0]["Make"] = "Toyota";
carsArray[0]["Model"] = "Rav4";
carsArray[0]["Year"] = "1990";
carsArray[0]["Parts"] = [];

carsArray[0]["Parts"][0] = "Tires";
carsArray[0]["Parts"][1] = "Hood";
carsArray[0]["Parts"][2] = "Seats";

carsArray[1]["Make"] = "Honda";
carsArray[1]["Model"] = "Civic";
carsArray[1]["Year"] = "2001";

console.log(carsArray);


let valid = true;

for(var i = 1; i <= 10; i++)
{
	
	
	if(i == 7)
	{
		
		continue;
	}
	
	console.log(i,"-It is sunny today");
}


var xCount = 12;

while(xCount <=10)
{
	console.log(xCount,"-It is cloudy today");
	xCount++;
}


do
{
	console.log(xCount,"-It is cloudy today");
	xCount++;
}while(xCount <=10)


for(x in carsArray)
{
	console.log(x);
}


let d = new Date();

console.log("Date");

let calendar = [];

for(var cx = 0; cx<5; cx++)
{	
	calendar[cx] = [];

}

console.log(calendar);

/*
for(var i = 0; i < 10; i++)
{
	d.setDate( d.getDate() + 1 );
	console.log(d.toDateString());
}*/