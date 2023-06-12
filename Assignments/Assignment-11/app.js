                // STRING METHODS
// Assignment # 21-25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstName = prompt('Enter your first name? ');
var lastName = prompt('Enter our last name? ');
var fullName = firstName + ' ' + lastName;
alert('Welcome To This Web ' + fullName);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
var favoritePhone = prompt('Enter your favourite phone model? ');
document.write('My favourite phone model is : ' + favoritePhone + '<br>');
document.write('Length of String is : '  + (favoritePhone.length) +  '<br>' + '<br>');

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
var findLetterN = 'Pakistan';
document.write('String : ' + findLetterN + '<br>');
document.write("Index of 'n' : " + findLetterN.indexOf('n') + '<br>' + '<br>');

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
var findLetterL = 'Hello World';
document.write('String : ' + findLetterL + '<br>');
document.write("Last Index of 'l' : " + findLetterL.lastIndexOf('l') + '<br>' + '<br>');

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
var findLetter3rd = 'Pakistani';
document.write('String : ' + findLetter3rd + '<br>');
document.write('Character at Index 3 is : ' + findLetter3rd.charAt(3) + '<br>' + '<br>');

// 6. Repeat Q1 using string concat() method.
var firstNameR = prompt('Enter your first name ? ');
var lastNameR = prompt('Enter our last name ? ');
var fullNameR = firstNameR.concat(lastNameR);
alert('Welcome To This Web ' + fullNameR);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
var cityh = 'Hyderabad';
document.write('City : '+cityh + '<br>');
cityi = cityh.replace("Hyder","Islam");
document.write('After Replacement : '+cityi + '<br>' + '<br>');



// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;
var message = 'Ali and Sami are best friends. They play cricket and football together.';
message = message.replace(/and/g,"&");
document.write(message + '<br>' + '<br>');

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
var num = 'Value:472';
document.write(num + '<br>');
document.write('Type:String' + '<br>');
document.write(num + '<br>');
document.write('Type:Number' + '<br>'  +'<br>');

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
var userInput = prompt('Enter a word : ');
document.write('User Input : ' + userInput + '<br>');
document.write('Upper Case : ' + userInput.toUpperCase() + '<br>' + '<br>');

// 11. Write a program that takes user input. Convert and
// show the input in title case.
var a = prompt("Enter a word" );
var b =  a.slice(0,1).toUpperCase()+a.slice(1,10); 
document.write("User input: ",a,"<br>");
document.write("Upper case: ",b);


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var numToString = 35.36;
document.write('Number : ' + numToString + '<br>');
numToString = numToString.toString()
numToString = numToString.replace('.','')
document.write('Result : ' + numToString + '<br>' + '<br>')

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
var name = prompt('Enter your username? ');
if(name === '@' || name === '!' ||name === '.' ||name === ',' ){
    alert('Please! Enter a valid username');}
var name = prompt('Enter your username : ');

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var item = ['cake','apple pie','cookie','chips','patties'];
var userChoose = prompt('Enter you wanna choose in our bakery? ');
userChoose = userChoose.toLowerCase();
for(i=0;i<item.length;i++){
    if(item[i] === userChoose){
        document.write(userChoose + ' is available at index ' + item.indexOf(userChoose) + ' in our bakery.' + '<br>' + '<br>');
    }
else{
        document.write('we are sorry ' + userChoose +' is not available in our bakery!');
        break
    }
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var apo = prompt("enter your password");
document.write("entered password ", apo, "<br>");

if (apo.slice(0, 1) <= 1000000) {
    document.write("Password cannot start with the numbers ", "<br>");
    document.write("plz enter a valid password" + "<br>" + "<br>");
}
else if (apo.length <= 6) {
    document.write("Password length cannot be less tha 6 character ", "<br>");
    document.write("plz enter a valid password"+ "<br>" + "<br>");
}
for (var i=0; i < apo.length; i++){
    switch(apo){
        case "!" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "@" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "#" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "$" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "%" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "^" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "&" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "*" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "=" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;

        case "+" :
            document.write("Password should not contain special characters" + '<br>');
            document.write("plz enter a valid password"+ "<br>" + "<br>");
            break;
    }
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
var university = 'University of Karachi';
university = university.split("");
// console.log(university);
for (i=0 ; i < university.length ; i++){
    document.write(university[i] + '<br>');
}

// 17. Write a program to display the last character of a user
// input.
var lastCharacter = prompt('Enter input character? ');
document.write('User Input : ' + lastCharacter + '<br>');
document.write('Last Character of Input : ' + lastCharacter.substr(-1) + '<br>' + '<br>');


// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string
var CountThe = 'The quick brown fox jumps over the lazy dog .';
document.write(CountThe + '<br>');
CountThe1 = CountThe.toLowerCase();
c = (CountThe1.match(/the/g)).length;
document.write('There are ' + c + ' occurence(s) of word \'the\' .' + '<br>'  + '<br>');
