// Assignment # 3
                                // VARIABLES FOR NUMBERS

// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
var age = 22;
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
var keep_track = 14;
alert("You have visited this page " + keep_track + " times.");


// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
// VARIABLES FOR NUMBERS | JAVASCRIPT
var birth_year = 2001;
document.write("</br>" + "My birth year is " + birth_year + "</br>" + "Data type of my declared variable is number");


// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var n = prompt("Enter your name");
var t = prompt("Enter product title");
var q = prompt("Enter the quantity");

document.write("</br>" + n + "Ordered" + q + t+"(s) on XYZ Clothing Store");