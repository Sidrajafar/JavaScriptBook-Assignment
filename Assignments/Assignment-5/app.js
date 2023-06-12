// Assignment # 5 
            //MATH EXPRESSIONS

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// var a= prompt("Enter first number:");
// var b= prompt("Enter second number:");

var num1 = 3;
var num2 = 5;
var result = num1 + num2
document.write("sum of 3 and 5 is " + result)


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var num1 = 3;
var num2 = 5;
var result = num1 - num2
document.write("subtraction of 3 and 5 is " + result)

var num1 = 3;
var num2 = 5;
var result = num1 * num2
document.write("multipication of 3 and 5 is " + result)

var num1 = 3;
var num2 = 5;
var result = num1 / num2
document.write("division of 3 and 5 is " + result)

var num1 = 3;
var num2 = 5;
var result = num1 % num2
document.write("modulus of 3 and 5 is " + result)

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write('Value after variable declaration is undefined'+ '</br>');

// c. Initialize the variable with some number.
var pique = prompt('Enter a number');
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write('Initial Value :5' + '</br>'  );

// e. Increment the variable.

// f. Show the value of variable in your browser like “Value
// after increment is: 6”
document.write('Value after Increment is: 6 </br>' )
// g. Add 7 to the variable.
var pique_1 = pique + 7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write('Value after addition is: 13 </br>'  );
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write('Value after decrement is: 12 </br>');
// k. Show the remainder after dividing the variable’s value
// by 3.
document.write('The Remainder is 3: </br>');
// l. Output : “The remainder is : 0”.
document.write('The Remainder is 0: </br>');

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
var movie_ticket = 600;
document.write('The cost of buy 5 tickets to a movie is : ' + 600*5 + 'PKR' + '</br>' + '</br>');
              

// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var that_123 = prompt('enter a numbre to generate multiplication table : ');
document.write('Table of ' + that_123 + '</br>');

for (i = 1; i<=12;i++){
    document.write(that_123 + " x " + i + " = " + that_123*i + '</br>');
}
document.write('</br>');

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:

var temp_cel = prompt("enter temperature in farenheit : ");
temp_cels = (temp_cel - 32) * (5/9) ;
document.write( temp_cel + '°F is ' + temp_cels + '°C.' + '</br>');

var temp_far = prompt("enter temperature in celsius : ");
temp_fare = (temp_far * (9/5)) + 32;
document.write(temp_far + '°C is ' + temp_fare + '°F.' + '</br>' + '</br>');

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write("<p style='font-size: 24px;'>Shopping Cart </p>" + '</br>');
var price_1 = prompt('enter cost of item 1 : ');
var price_2 = prompt('enter cost of item 2 : ');
var ord_1 = prompt('enter quantity of item 1 : ');
var ord_2 = prompt('enter quantity of item 2 : ');
var ship_charge = 500;
var ord_1$ = price_1 * ord_1;
var ord_2$ = price_2 * ord_2;
var order_cost_total = ord_2$ + ord_1$ + ship_charge;
document.write('Price of item 1 is : ' + price_1 + '</br>');
document.write('Quantity of item 1 is : ' + ord_1 + '</br>');
document.write('Price of item 2 is : ' + price_2 + '</br>');
document.write('Quantity of item 2 is : ' + ord_2 + '</br>');
document.write('Shipping Price : ' + ship_charge + '</br>');
document.write('Total Cost of your Order is :  ' + order_cost_total + '</br>' + '</br>');


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var gain_marks = prompt('enter gained marks : ');
var to_marks = prompt('enter total marks : ');
var per_cen = ((gain_marks/to_marks) * 100);
document.write("<p style='font-size: 24px;'>Marksheet</p>" + '</br>');
document.write('Total Marks : ' + to_marks + '</br>');
document.write('Marks Achieved : ' + per_cen + '</br>');
document.write(per_cen +'%'+ '</br>' + '</br>');

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<p style='font-size: 24px;'>Currency in PKR</p>" + '</br>');
document.write('Total Currency in PKR : ' + ((10*104.80) + (25*28)) + '</br>' + '</br>');

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var iv = 5;
document.write((iv+5*10/2) + '</br>' + '</br>');

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
document.write("<p style='font-size: 24px;'>Age Calculator</p>" + '</br>');
var current_year  = prompt('enter current year : ');
var birth_yea = prompt('enter birth year : ');
document.write('Current Year : ' + current_year + '</br>');
document.write('Born Year : ' + birth_yea + '</br>');
document.write('Your Age is : ' + (current_year - birth_yea) + '</br>' + '</br>');


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write("<p style='font-size: 24px;'>The Geometrizer</p>" + '</br>');
var rad = prompt('enter radius of circle : ');
document.write('Radius of Circle : ' + rad + '</br>');
document.write('The Circumference of circle : ' , (2*3.142*rad),'</br>');
document.write('The Area of circle is : ' , (3.142*(rad*rad)) , '</br>' , '</br>');


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
//  NNNN to last you until the ripe old age of NN”.        
 var f_a = prompt("enter your fouvrite snacks : ");
var c_a = prompt("enter your current age : ");
var m_a = prompt("enter your maximum age : ");
var p_p = prompt("amount of snacks per day you eat(in numbers) : ");
var t_t = (m_a-c_a)*p_p;
document.write("<p style='font-size: 24px;'>The Lifetime Supply Calculator</p>" + '</br>');
document.write("Favourite Snacks is",f_a+"</br>");
document.write("Your current age is ",c_a+"</br>");
document.write("Your maximum age is ",m_a+"</br>");
document.write("Amount of snacks per day is ",p_p+"</br>");
document.write("You will need ",t_t," ",f_a," ","to last you until the ripe old age of"," ",m_a+"</br>"+"</br>");
