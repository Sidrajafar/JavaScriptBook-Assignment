// Assignment # 58-67JAVASCRIPT
                                          // DOM

// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.
var result = document.getElementById("main-content");
document.getElementsByClassName("render").innerHTML = result;

function myFunction() {
document.getElementById("f-name").value="Sidra";
document.getElementById("l-name").value="Fatima";
document.getElementById("email").value="syedasidrafatima417@gmail.com";
}

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”

