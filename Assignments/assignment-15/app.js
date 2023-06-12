// Assignment # 38-44
                  // FUNCTIONS, SWITCH
                  // STATEMENTS, WHILE… DOWHILE LOOPS

// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
var a = +prompt("Enter the base : ");
var b = +prompt("Enter the power : ");

function power(a,b)
{
    return a**b;
}
p = power(a,b);
alert(p);


// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …
var y = +prompt("Enter a year : ");

function leapYear(y)
{
    if (y%4===0)
    {
        if(y%400===0 || y%100!==0)
        {
            alert(y + " is leap year");
        }
        else
        {
            alert(y + "is not aleap year");
        }
    }
    else
    {
        alert(y + "is not a leap year");
    }
}
leapYear(y);


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
var a = +prompt("Enter length a : ");
var b = +prompt("Enter length b : ");
var c = +prompt("Enter length c : ");
var S = 0;
function sol(a,b,c)
{
    S = (a + b + c)/2;
    return S;
}
sol(a,b,c);

function area(S,a,b,c)
{
    alert("Area of triangle is " + (S * (S-a) * (S-b) * (S-c)) + " units");
}
area(S,a,b,c);


// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
var marksOne = +prompt("Enter marks out of 100 : ");
var marksTwo = +prompt("Enter marks out of 100 : ");
var marksThree = +prompt("Enter marks out of 100 : ");
var average = 0;
var percentage = 0;
function avg(marksOne,marksTwo,marksThree)
{
    average = (marksOne + marksTwo + marksThree) / 3;
    return average;
}
function per(marksOne,marksTwo,marksThree)
{
    percentage = ((marksOne + marksTwo + marksThree) / 300 ) * 100;
    return percentage;
}
function displayResult()
{
    alert("Average : " + avg(marksOne,marksTwo,marksThree));
    alert("Percenatge : " + per(marksOne,marksTwo,marksThree) + "%");
}
displayResult();

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
var sentence = prompt("Enter a text : ");
var word = prompt('Enter a string : ');
function index()
{
    for (var i = 0; i < sentence.length ; i++){
        if (sentence[i] == word)
        {
            alert(i);
            break;
        }
    }
}
index();

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

var string = prompt('Enter string : ');
function removeVowels(string){
    var vowels = "aeiou";
    var str1 = string.toLowerCase().split("");
    var str2 = str1.filter(function(letter){
        if(vowels.indexOf(letter)  == -1){
            return letter;
        }
    });
     var string = "";
     str2.forEach(function(letter){
         string += letter;
     });
     return string;
}

print(removeVowels(string));


// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

var sentence = prompt('Enter sentence : ');
function vowel_count(sentence)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < sentence.length ; x++)
  {
    if ((vowel_list.indexOf(sentence[x]) !== -1) && (vowel_list.indexOf(sentence[x+1]) !== -1))
    {
      vcount += 1;
    }
  
  }
  alert(vcount);

}
vowel_count(sentence);

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet,  inches and centimeters.
var distanceKm = +prompt("Enter the distance : ");

function meters()
{
    var distanceMeters = distanceKm * 1000;
    alert('Distance in metre : ' + distanceMeters);
}
meters();

function feet()
{
    var distanceFeet = distanceKm * 3280.84;
    alert('Distance in feet : ' + distanceFeet);
}
feet();

function inches()
{
    var distanceInches = distanceKm * 39370.1 ;
    alert('Distance in inches : ' + distanceInches);
}
inches();

function cm()
{
    var disancetCm = distanceKm * 100000;
    alert('Distance in centimetre : ' + disancetCm);
}
cm();

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

var workingHour = +prompt('Enter working hours : ');
workingHour = (workingHour / 40) * 100;

function pay()
{
    if (workingHour > 40)
    {
        alert('Amount earned after Over-time : ' + 12 * workingHour);
    }
}
pay();


// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
var amount = +prompt('Enter amount to withdraw : ');
function denomination()
{
    alert( amount/100 + ' Hundred rupees notes ' + (amount % 100) / 50) + ' fifty rupees notes ' +  (((amount % 100) % 50) / 10) + ' ten rupees notes';
    alert('remaining rupees : ' +  (((amount % 100) % 50) / 10));
}
denomination();