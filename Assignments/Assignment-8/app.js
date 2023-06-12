// Assignment # 12-13
          // IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
var character = prompt("Enter something");

if( "A"<=character && character<="Z"){
    document.write("uper case");
}
else if ("a"<=character && character<="z"){
    document.write("lower case" + '</br>' + '</br>');
}
else if(-9<=character && character<=9){
    document.write("Integer") + '</br>' + '</br>';
}
else{
    document.write("special character") + '</br>' + '</br>';
}


// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
var first = prompt("Enter a first number");
var second = prompt("Enter a second number");
if (first == second){
    alert('Both are equal');
}else if( first>second){
    alert(first);
}else if(first<second){
    alert(second);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
var pn = prompt("enter a number");

if (pn > 0){
    alert("positive");
}else if( pn<0){
    alert("negative");
}else{
    alert("zero");
}

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
var vowel = prompt("enter a first number");

if (vowel == "a" || vowel == "e" || vowel == "i" || vowel =="o" || vowel =="u" || vowel == "A" || vowel == "E" || vowel =="I" || vowel == "O" || vowel == "U"){
    alert("true");
}
else{
    alert("false");
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
var password_1 = 'Sidr417';
var password_2 = prompt('Enter your password : ');
if (password_1 != ' '){
    if(password_2 == password_1){
        alert('Correct! The password you entered matches the original password');
    }
    else{
        alert('Incorect Password');
    }
}
else{
    alert('enter the password please');
}


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if(hour<18){
    alert(greeting="Good Day");
}
else{
    alert(greeting = "Good Evening");
}


// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
var time = prompt("enter the time");

if (time>=0 && time<1200){
    alert("Good Morning");
}
else if (time>=1200 && time<1700){
    alert("Good Afternoon");
}
else if(time>=1700 && time<2100){
    alert("Good Evening");
}
else if (time>=2100 && time<=2359){
    alert("Good Night");
}
else{
    alert("Enter correct time");
}

