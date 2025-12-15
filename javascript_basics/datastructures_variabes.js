/*primitive datatypes in javascript*/
let number=42; //number
let string="Hello, World!"; //string
let boolean=true; //boolean
let city; //undefined
city="kathmandu"
let value=12.26; //float

/*Non-primitive datatypes in javascript*/
let object=
{
    data1:"name", //use : to assign values to the object member and use = to assign value to variable
    data2:25,
    method(){ //method inside object
        console.log("This is an object");
    }
}

object.method(); //calling method inside object

let arr = [1,2,3,4,5]; //array
console.log("this is an array",arr)
console.log("This is an array:"+ arr)
console.log("This is an array element:"+ arr[2]); //accessing array element

let arr1=Array(7).fill(2); //creating array using Array constructor and fill method\
console.log("This is an array created using Array constructor and fill method:",arr1);

/*********************variables in javascript***********************/
if(true){
    let a=10; //block scope variable
}
//console.log(a); //error: a is not defined because a is block scope variable

if(true){
    var b=20; //function scope variable
}
//console.log(b); //20: b is accessible here because var is function scope variable


f1()
function f1(){
    console.log("This is a hoisted function");
}

const f2=function(){
    console.log("This is unhoisted function");
}

f2(); //calling unhoisted function
f1(); //calling hoisted function

/*Conditionals in javascript*/


if ('5'===5){ //strict equality operator
    console.log(true);
}
else{
    console.log(false);
}

if ('5'==5){ //loose equality operator , '5' which is a string is converted to number 5 before comparison
    console.log(true);
}
else{
    console.log(false);
}

/*loops in javascript*/

let arr3=[10,20,30,40,50]

for(i=0;i<arr3.length;i++)
{
    console.log(arr[i]);
}

let fruits=['mango', 'apple', 'banana', 'orange']
for(let item of fruits)//use let items to run loop for each item in the array
{
    console.log(item)
}

let student=
{
    name:"John",
    id:101,
    address:"Kathmandu",
}

for(let key in student) //key will hold the property name of the object
{
    console.log(key,"=",student[key])
}