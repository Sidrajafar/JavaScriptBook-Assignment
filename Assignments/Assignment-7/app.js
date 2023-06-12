// Assignment # 9-10
                       // USER INPUT & CONDITIONAL STATEMENT
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
city_khi = prompt('Enter city name ? ' );
if ( city_khi === 'KARACHI' || city_khi === 'karachi' || city_khi === 'Karachi'){
    alert('Welcome to city of lights'); }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

gender = prompt('Enter your gender: ');
if (gender === 'Male' || gender === 'male'){
    alert('Good Morning Sir!');
} 
else if (gender === 'Female' || gender === 'female'){
    alert('Good Morning Maam!');
} 
else{
    alert('Enter male or female')
}


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
var traffic_signal = prompt('Enter the traffic light color form Red,Yellow or Green : ');
if (traffic_signal === 'Red' || traffic_signal === 'red'){
    alert('Must Stop!');
}
else if (traffic_signal === 'Yellow' || traffic_signal === 'yellow'){
    alert('Ready to move');
}
else if (traffic_signal === 'Green' || traffic_signal === 'green'){
    alert('Move now');
}
else{
    alert('Enter Traffic light');
}


// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”
var remaining_fuel = prompt('Enter remaining fuel of vehicle ( in litres ) : ');
if (remaining_fuel ===  0.25){
    alert('Please refill the fuel of your car');
}


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
var sub1$ = prompt('enter subject 1  name : ');
var sub2$ = prompt('enter subject 2  name : ');
var sub3$ = prompt('enter subject 3  name : ');

var g_1$ = prompt('enter gained marks in subject 1 : ');
var g_2$ = prompt('enter gained marks in subject 2 : ');
var g_3$ = prompt('enter gained marks in subject 3 : ');

var marks_all_$tree = 300;
var gain_tot$ = g_1 + g_2 + g_3;
var b_per$ = (gain_tot$ / marks_all_$tree) * 100;

if (b_per$ >= 80 ){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'A-one' + '</br>');
    document.write('Remarks : ' + 'Excellent' + '</br>' + '</b>');
}
else if (b_per$ <80 && b_per$ >=70 ){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'A' + '</br>');
    document.write('Remarks : ' + 'Good' + '</br>' + '</b>');
}
else if (b_per$ < 70 && b_per$ >= 60){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'B' + '</br>');
    document.write('Remarks : ' + 'You need to improve' + '</br>' + '</b>');
}
else if (b_per$ < 60){
    document.write("<p style='font-size: 24px;'>MARKSHEET</p>" + '</br>');
    document.write('Total Marks : '+marks_all_$tree + '</br>');
    document.write('Obtained Marks : '+gain_tot$ + '</br>');
    document.write('percentage : '+b_per$ + '</br>');
    document.write('Grade : ' + 'Fail' + '</br>');
    document.write('Remarks : ' + 'Sorry' + '</br>'+ '</b>');
}
else{
    document.write('Enter a valid entry' + '</b>' + '</b>');
}



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


var secret_num = 7;
var guess_num = prompt('guess a sceret number ranging from 0 till 10 : ');
if (guess_num == secret_num){
    document.write('Bingo ! Correct Answer !!!' +  '</b>' + '</b>');
}
else if(guess_num + 1 === secret_num){
    document.write('Close enough to the correct answer' +  '</b>' +  '</b>');
}
else{
    document.write('wrong guess' +  '</b>' +  '</b>');
}


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
var by_3 = prompt('Enter number : ');
if(by_3 % 3 == 0){
    alert('the number is divisible by 3');
}


// 9. Write a program that checks whether the given input is an
// even number or an odd number.
var o$ = prompt('enter number : ');
if(o$ % 2 == 0){
    alert('It is an even number');
}
else if(o$%2 != 0 ){
    alert('It is an odd number');
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
var a$a = prompt("enter the temperature");

if (a$a>40){
    alert("It's too hot outside ");
}
else if(a$a >30){
    alert(" The whether today's is Normal");
}
else if(a$a >20){
    alert(" Today's whether is cool");
}
else if(a$a >10){
    alert("OMG! Today's whether is cool");
}
else{
    alert("incorrect temerature");
}
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var n$ = prompt("enter first number");
var m$ = prompt("enter second number");
var a$ = prompt("enter the operator which you want");
if( a$ === "+"){
    alert(m$+n$);
}
else if(a$ === "-"){
    alert(n$-m$);
}
else if( a$ === "*"){
    alert(n$*m$);
}
else if( a$ === "/"){
    alert(n$/m$);
}
else if( a$ === "%"){
    alert(n$%m$);
}
else{
    alert("unable to do");
}
                   
