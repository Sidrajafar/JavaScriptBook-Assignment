// Assignment # 17-20
                 // ARRAYS AND LOOP
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

var  array1= new Array (2);  
document.write("Creating 2D array");
for (var i = 0; i < array1.length; i++) { 
    array1[i] = new Array(2); 
} 
document.write();

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

var num = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
for (var i=0 ; i < num.length ; i++){
    document.write(num[i].join(' ') + '<br>' )
}
document.write();

// 3. Write a program to print numeric counting from 1 to 10.

for(var n = 1; n < 11;n++){
        document.write(n + '<br>');
    }
    document.write();


// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var showNum = prompt('Enter a Number to show its Multiplication Table?');
var showLenght = prompt('Enter a length of Multiplication Table?');

document.write("<p style='font-size: 15px;'>Multiplication Table of " +showNum+  '</br>' );
document.write('Table Lenght ' +showLenght+  '<br>');

for(o = 1; o<=showLenght ; o++){
    document.write(showNum + ' x ' + o + ' = ' + showNum*o + '<br>' + '<br>')
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']; 
for(i = 0; i<fruits.length ; i++){
    document.write(fruits[i] + '<br>');
}
document.write('<br>' + '<br>');
for( s = 0 ; s<fruits.length; s++){
    document.write('Element at index ' + s + ' is ' + fruits[s] + '<br>' );
}
document.write('<br>' + '<br>');


// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<p style='font-size: 24px;'>Counting : </p>" + '</br>');
for(i = 1; i <= 15 ; i++){
    document.write(i + ', ');
}
document.write('<br>' + '<br>');

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<p style='font-size: 24px;'>Reverse Counting : </p>"  + '</br>');
for(i = 10; i >= 1  ; i--){
    document.write(i + ',');
}
document.write('<br>' + '<br>');

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<p style='font-size: 24px;'>Even : </p>" + '</br>');
for(var s = 0; s <= 20 ; s++){
    if(s%2 == 0){
        document.write(s + ', ');
    }
}
document.write('<br>' + '<br>');
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

document.write("<p style='font-size: 24px;'>Odd : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 != 0){
        document.write(s + ', ');
    }
}
document.write('<br>' + '<br>');
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


document.write("<p style='font-size: 24px;'>Even : </p>" + '</br>');
for(var s = 1; s <= 20 ; s++){
    if(s%2 == 0){
        document.write(s + 'k, ');
    }
}


// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

var item = ["cake","apple pie","cookie","chips","patties"];
var bakery = prompt("Welcome to sid bakery What do you want to order?");

for(x=0; x<=4 ; x++){
    if(item[x]==bakery){
        document.write(item[x]," ","is available at index"," ",x," " ,"in our bakery");
    } 
}
if(item[0]==bakery || item[1]==bakery || item[2]==bakery || item[3]==bakery || item[4]==bakery){        
}
else if(item[0]!=bakery || item[1]!=bakery || item[2]!=bakery || item[3]!=bakery || item[4]!=bakery){
    document.write("We are Sorry" ," "+bakery+"  ","is not available in our bakery");
}



// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
var largestNum = [24, 53, 78, 91, 12];
document.write('Array Items : ' + largestNum + '<br>');

var largest= 0;

for (i=0; i<=largest;i++){
    if (largestNum[i]>largest) {
        var largest=largestNum[i];
    }
}

document.write('The largest number in an array is : '+largest + '<br>' + '<br>');


// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

var smallestNum = [24, 53, 78, 91, 12];
document.write('Array Items : ' + smallestNum + '<br>');

var smallest= 0;

for (i=0; i>=smallest;i++){
    if (smallestNum[i]>smallest) {
        var smallest=smallestNum[i];
    }
}
document.write('The smallest number in an array is : '+smallest + '<br>' + '<br>');

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

for (var m = 1; m < 100; m++) {
    if (m % 5 === 0) {
      if (m < 100) {
        document.write(m + ' ,')
      } else {
        document.write(m)
      }
    }
  }