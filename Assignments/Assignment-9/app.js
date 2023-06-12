// Assignment # 13-15
                              // ARRAYS
// 1. Declare an empty array using JS literal notation to store
// student names in future.
stud_name = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var st_name = new Array();

// 3. Declare and initialize a strings array.
var string = ['Ali Raza' , 'Minhal' , 'Jaffar'];

// 4. Declare and initialize a numbers array.
var number = [1,2,3,4,5,6];

// 5. Declare and initialize a boolean array.
var boolean = ['True','False'];
// 6. Declare and initialize a mixed array.
var mi_xed = ['karachi' , 10,'messi' , 36,'True'];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var qualification = ['SSC','HSC','BCS','BS','B.COM','MS','M.Phil.','PhD'];
document.write('QUALIFICATIONS');
for (var i = 0; i<qualification.length;i++){
    document.write( i  + " .. " + qualification[i] + + '</br>' + '</br>');
}
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var st =  ['ali' , 'Minhal' , 'sid'];
var cr = ['499','388','427'];

document.write('Score of ' + st[0] + ' is ' + cr[0] + '. Percenatge : ' +  ((cr[0] / 500 ) * 100) + '</br>' + '</br>');
document.write('Score of ' + st[1] + ' is ' + cr[1] + '. Percenatge : ' +  ((cr[1] / 500 ) * 100) + '</br>' + '</br>');
document.write('Score of ' + st[2] + ' is ' + cr[2] + '. Percenatge : ' +  ((cr[2] / 500 ) * 100) + '</br>' + '</br>');

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var col_or$ = ['blue','yellow','red','pink','green'];
for (i=0;i<=col_or$.length;i++){
    document.write(col_or$[i] + '</br>');
}

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var as_k = prompt('enter color you wanna add in array : ');
col_or$.unshift(as_k);
document.write(as_k + '</br>');

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
var ae_k = prompt('enter color you wanna add at the end : ');
col_or$.push(ae_k);
document.write( col_or$ + '</br>');

// d. Delete the first color in the array. Display the updated
// array in your browser.
var as_k_1 =   prompt('enter color you wanna add in array : ');
col_or$.unshift(as_k_1);
document.write( col_or$ + '</br>');

// e. Delete the last color in the array. Display the updated
// array in your browser.
col_or$.shift();
document.write( col_or$ + '</br>');

col_or$.pop();
document.write( col_or$ + '</br>');
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
a_d = prompt('at which index you wanna add : ');
a_d_c = prompt('enter color name: ');
col_or$[a_d] = a_d_c;
document.write( col_or$ + '</br>');

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
b_d = prompt('at which index you wanna remove : ');
b_d_c = prompt('enter nuber of color you wanna delete : ');
col_or$.splice(b_d , b_d_c);
document.write( col_or$ + '</br>');

document.write('</br>');

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var m_t = [320,236,396,402];
document.write('Students Marks : '+m_t + '<br>');
var m_t_1 = m_t.sort();
document.write('Students Marks in Ascending order : '+m_t_1 + '<br>');

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var cities_1 = ['Karachi' ,'Islamabad','Lahore','Peshawar','Quetta'];
var selected_city  = [cities_1];

var x$ = selected_city.splice(2,2);


document.write('All cities : ' + cities_1 + '<br>');
document.write('Selected Cities : '+ x$ + '<br>' + '<br>');
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var ar$ = ['This ','is ','my ','cat '];
document.write('Array  :' + '<br>');
document.write(ar$ + '<br>');
document.write('String : ' + '<br>');
document.write(ar$.join(' ')  + '<br>' + '<br>')

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var x_w = ['keyboard','mouse','printer','monitor'];
document.write("Devices"+"<br>");
document.write(x_w);
document.write("<br>"+"<br>");
for(i=0;i<x_w.length;i++){
    document.write('Out :  ' + '<br>');
    document.write(x_w[i] + '<br>' + '<br>');
}


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
var d= ["keyboard","mouse","printer","monitor"];
document.write("Devices"+"<br>");
document.write(d);
document.write("<br>"+"<br>");
for(i=3;i>=0;i--){
    document.write("Out:"+"<br>");
    document.write(d[i]+"<br>" + "<br>");
}


// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:
var dist_$ = ['Nokia', 'Samsung','Apple','Motorolla','LG','Infinix','Techno','Oppo','Haier'];
document.write('SELECT A COMPANNY FROM DROP DOWN MENU' + '<br>');
for ( i = 0; i < dist_$.length ; i++){
    document.write((i+1)+'. '+dist_$[i] + '<br>' + '<br>');
}