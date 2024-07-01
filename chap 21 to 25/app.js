// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var userFirstName = prompt("what is your first name?")
// var userLastname = prompt("what is your last name?")
// 
// var fullName = userFirstName +" "+ userLastname
// console.log(fullName)
// alert("Salam"+" "+fullName+"😊")


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// 
// var userMobile = prompt("What is your favourite mobile phone model?")
// console.log(userMobile)
// var userMobileLength = userMobile.length
// 
// for (var i =0 ; i<userMobileLength; i++){
    // console.log(userMobileLength[i]);
// }
// 
// 
// document.write("My favourite phone is:"+" "+ userMobile.toUpperCase()+"<br>"+"Length of string:"+userMobileLength)


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var nameString = "Pakistani"
// document.write("String:" +" "+nameString +"<br>"+"Index of 'n':"+nameString.indexOf('n'))


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var nameString = "Hello world"
// document.write(nameString+"<br>"+"Last index of 'I':"+nameString.lastIndexOf("l"))


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var nameString = "Pakistani"
// document.write("String:" +" "+nameString +"<br>"+"Character at index 3:"+nameString.charAt(3))


// 6. Repeat Q1 using string concat() method.

// var userFirstName = prompt("what is your first name?")
// var userLastname = prompt("what is your last name?")
// 
// var fullName = userFirstName + " "+ userLastname
// 
// alert("Salam "+ fullName+"😊");


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var newCity = city.replace("Hyder","Islam");
// document.write("city:"+city+"<br>"+"After replacement:"+newCity)


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

//  var message = "Ali and Sami are best friends.They play cricket and football together.";
//  var newMessage = message.replaceAll("and","&");
//  document.write(newMessage)


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var numString = "472"
// var numToNum = numString - 0
// document.write("Value:"+numToNum +"<br>"+"Type:"+"string"+"<br>"+"Value:"+numToNum+"<br>"+"Type:"+"number")


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// 
// var userInput = prompt("Your input?")
// document.write("User input:"+userInput+"<br>"+"Upper case:"+userInput.toUpperCase())
// 

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var input = "javascript"
// var titleCase = input.slice(0,1).toUpperCase()+input.slice(1);
// document.write("User input:"+ input +"<br>"+"Title case:"+titleCase)


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var numberAsNumber = 35.36;
// var numToString = numberAsNumber.toString();
// var result = numToString.replace(".","");
// document.write("Number:"+numberAsNumber+"<br>"+"Result:"+result)


13. Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .

Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64
