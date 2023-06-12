// Assignment # 35-38
// FUNCTION
// 1. Write a function that displays current date & time in your
// browser.
function current ()
    {
        var date = new Date();
        return document.write(date + '<br>' + '<br>');
    }
current();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
function greet()
    {
        var firstName = prompt('Enter your first name: ');
        var lastName = prompt('Enter your last name: ');
        var fullName = firstName + ' ' + lastName;
        return alert('Welcome To This Web ' + fullName);
    }
greet();


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
function sumOfNumber(){
    let num1 = +prompt("Enter a number: ");
    let num2 = +prompt("Enter an other number: ");
    let res = num1 + num2;
    return res;
}
alert(sumOfNumber());

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
var num1 = +prompt('Enter first number: ');
var num2 = +prompt('Enter second number: ');
var operator = prompt('Enter operation: ');

function calculate(num1,operator,num2){
    if(operator == "+"){
        return num1 + num2
    }
    else if(operator === "-"){
        return num1 - num2
    } 
    else if(operator === "*"){
        return num1 * num2
    }
    else if(operator === "/"){
        return num1 / num2
    }
    else if(operator === "%" ){
        return num1 % num2
    }
    else{
        return "Incorrect Operator!"
    }
}
var result = calculate(num1,operator,num2);

alert(result);


// 5. Write a function that squares its argument.
function squares(argument)
    {
        return alert(argument*argument)
    }
var argument = +prompt('Enter a number: ');
squares(argument);


// 6. Write a function that computes factorial of a number.
function factorial(number)
    {
        var fc = 1

        if (number < 0){
            return alert('factorial of negative number is not possible!')
        }
        else if (number === 1 || number === 0){
            return alert('factorial is 1');
        }
        else{
            for (var i = 1; i <= number ; i++){
                fc = fc * i;
            }
            return alert(fc);
        }

    }

var number = +prompt('Enter a number: ');
factorial(number);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
function counting()
    {
        for(var i =N1 ; i <= N2 ; i++){
             document.write(i + '<br>');
        }
    }

var N1 = +prompt('Enter start number:');
var N2 = +prompt('Enter end number: ');

counting();


// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


var base = +prompt('Enter base : ');
var perPendicular = +prompt('Enter perpendicular : ');


function hypoTnuse()
    {
        dav = square() ** 0.5
        return dav
        function square()
            {
               return  base$ = base * base;
               return per$ = perPendicular * perPendicular;
                hyp$ = base$ + per$;
               return hyp$
            }
    }

hypoTnuse();
document.write('Hypotnuse: ' + hypoTnuse() +  '<br>' + '<br>');



// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
function areaOfSquare(height,width)
    {
        document.write('The Area is : ' + height * width);
    }

var height = +prompt('Enter height : ');
var width = +prompt('Enter width : ');

areaOfSquare(height,width);


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
var word = prompt("Enter your name: ");
var check = "";

function palindrome()
    {

        for (var i = word.length - 1; i >= 0 ;i--){
            check += word[i]
        }

        if (word === check){
            return alert(word + " is a palindrome");
        }
    }
palindrome();



// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function Case(v)
    {

        var s = str=> str[0].toUpperCase()+str.slice(1).toLowerCase();
        var b = v.split(" ");
        var c = v.split(" ").map(s).join(" ");
        console.log(c);

    }

var v = prompt("Enter the sentence");
Case(v);



// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function longest (a)
    {

        var arr = a.split(" ")
        var c ;
        var d = 0;
        for (i=0;i<arr.length;i++){
            if(arr[i].length>d){
                d = arr[i].length;
                c= arr[i];
            }

        }
    document.write("Sentence : "+a+"<br>");
    document.write("The longest word in sentence : " + c + "<br>" + "<br>");

    }

var a = prompt("Enter the sentence");
f = longest(a);


// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
function letter_count(str, letter) 
{
 var letters_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return  a=letter_Count;
}
var str = prompt('Sentence : ');
var letter = prompt('Confer : ');
console.log(letter_count(str, letter));
document.write('In sentence ' + str + ' the word ' + letter + ' occurrences ' + a + ' times ' + '<br>' );



// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
var r = prompt("enter the radius");
function calcCircumference(r){
    document.write("The circumference is : " + (2*3.42*r) +  "<br>");
    
}

calcCircumference(r);

function calcarea(r){
    document.write("The area is : " + (3.142*(r)**2));
    
}

calcarea(r);