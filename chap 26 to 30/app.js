// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var inputInteger = prompt("Please insert any positive integer")
var integer = inputInteger
console.log(Math.round(integer)+"</br>"+Math.floor(integer)+"<br>"+Math.ceil(integer))