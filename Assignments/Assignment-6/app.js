// Assignment # 6
                            // MATH EXPRESSIONS
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var x = prompt('enter a number : ');
document.write("<p style='font-size: 24px;'>The Result!</p>" + '</br>');
document.write('The value of a is : ', +x, '</br>');
document.write('-------------------------------------------' + '</br>');
document.write('The value of ++a is : ', ++x, '</br>');
document.write('Now The value of a is : ' + x + '</br>');
document.write('The value of a++ is : ', x++, '</br>');
document.write('Now The value of a is : ' + x + '</br>');
document.write('The value of --a is : ', --x, '</br>');
document.write('Now The value of a is : ' + x + '</br>');
document.write('The value of a-- is : ', x--, '</br>');
document.write('Now The value of a is : ' + x + '</br>');

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2;
var b = 1;
var result = (--a) - (--b) + (++b) + (b--);
document.write('a is : ' + a + '</br>');
document.write('b is : ' + b + '</br>');
document.write('result is : ' + result + '</br>' + '</br>');



// 3. Write a program that takes input a name from user &
// greet the user.
var name_greet = prompt('enter your name : ');
alert('Welcome ' + name_greet + ' to my website ThankYou!');


// 4/5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var that_1234 = prompt('enter a numbre to generate multiplication table : ');

for (i = 1; i <= 12; i++) {
    if (that_1234 == [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        document.write(that_1234 + " x " + i + " = " + that_1234 * i + '</br>');

    }
    else {
        document.write('5' + " x " + i + " = " + 5 * i + '</br>');
    }
}
document.write('</br>');


// 6.task
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var sub1 = prompt('enter subject 1  name : ');
var sub2 = prompt('enter subject 2  name : ');
var sub3 = prompt('enter subject 3  name : ');
var marks_all = 100;
var g_1 = prompt('enter gained marks in subject 1 : ');
var g_2 = prompt('enter gained marks in subject 2 : ');
var g_3 = prompt('enter gained marks in subject 3 : ');
var marks_all_tree = 300;
var gain_tot = g_1 + g_2 + g_3;
var b_per = (gain_tot / marks_all_tree) * 100;
var g_p_1 = ((sub1/marks_all) * 100);
var g_p_2 = ((sub2/marks_all) * 100);
var g_p_3 = ((sub3/marks_all) * 100) ;

document.write('Sub.' + '   ' + 'Tot.M' +  '   '+ 'Obt.Ma' + '  ' + 'MarksPer.' + '</br>' + '</br>');
document.write('sub1' + '   ' + marks_all + '   ' + g_1 + '     ' + g_p_1 + '</br>' + '</br>');
document.write('sub2' + '   ' + marks_all + '   ' + g_2 + '     ' + g_p_2 + '</br>' + '</br>');
document.write('sub3' + '   ' + marks_all + '   ' + g_3 + '     ' + g_p_3 + '</br>' + '</br>');
document.write('    ' + marks_all_tree + '      ' + gain_tot + '      ' + b_per+'%' + '</br>' + '</br>');