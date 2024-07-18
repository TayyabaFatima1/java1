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


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// 
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// 
// var userName = prompt("Enter your username?")
// var userNameStore = userName
// var symbol = "['@' '.' ',' '!']"
// var containSymbol = false
// 
// for (var i=0; i<symbol.length; i++){
    // if (userName.includes(symbol[i])){
        // containSymbol=true;
        // break}
    // }
    // if(containSymbol){
        // alert("please enter valid username");
        // 
    // }
    // else{
        // alert("Your user name is good to go");
//    
    // }


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var userName = prompt("Welcome to sweet bakery! sir/ma'am, your order please?").toLowerCase();
// var array = ["cake", "apple pie", "cookie", "chips", "patties"];
// var found = false
// 
// for (var i=0; i<array.length; i++){
//  if (array[i].toLowerCase() === userName){
// var found = true;
// break;
//  }
// }
// if(found== false){
    // alert("we are sorry "+ userName +" is not available");
// 
// }
// else{
    // alert("Yes "+ userName+ " is available");
// 
// }



// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document")
// 
//  var userInput =prompt("Tell your password:")
 
// Task 16
// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”;

// var str='University of Karachi';
// var arr =str.split("");
// for(var i=0;i<str.length;i++){
//     document.write(arr[i]+'<br>')
// }

// Task 17
// Write a program to display the last character of a user input. 

// var userInput=prompt('Write any word');
// document.write('User input :'+userInput+'<br>'+'Last character of input:'+userInput[userInput.length-1])

// Task 18
// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str='The quick brown fox jumps over the lazy dog';
// str =str.toLowerCase();
// var count=str.match(/the/g);
// var length=count.length;
// document.write('Text:'+str+'<br>'+'There are '+length+' occurence(s) of word "the"'


