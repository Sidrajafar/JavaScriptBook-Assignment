// Assignment # 43-48
//                        Events

// 1. Show an alert box on click on a link.


// 2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.


// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.
// Before delete
// After click on delete button on “Mark ” row


// function del()
// {
//     document.getElementById("aa1").remove(); 
// }


// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
function changeImage()
{
    var ChangeI = document.getElementById('ca');
    ChangeI.src = 'b2.jpg';
}

function out()
{
    var ChangeI = document.getElementById('ca');
    ChangeI.src = 'b1.jpg';
}
// 5. Show a counter in browser. Counter should increase on click on increase
// button and decrease on click on decrease button. And show updated counter
// value in browser.
// let btnAdd = document.querySelector('#add');
// let btnSub = document.querySelector('#sub');
// let input = document.querySelector('input');

// btnAdd.addEventListener('click' , () =>{
//     input.value = parseInt(input.value) + 1;
// });

// btnSub.addEventListener('click' , () =>{
//     input.value = parseInt(input.value) - 1;
// });


                                  // Assignment # 49-52
// 1. Create a signup form and display form data in your web
// page on submission.




                           // Assignment # 53-57 JAVASCRIPT
// 1. Consider you have 4 images in a file as shown below:
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.
var modal = document.getElementById('modal');
var modalImage = document.getElementById('modalImage');
var isZoomed = false;

function openModal(imageUrl) {
  modalImage.src = imageUrl;
  modal.style.display = 'block';
  toggleZoom();
}

function toggleZoom() {
  if (isZoomed) {
    modalImage.style.transform = 'scale(1)';
  } else {
    modalImage.style.transform = 'scale(1.2)';
  }
  isZoomed = !isZoomed;
}

function closeModal() {
  modal.style.display = 'none';
  modalImage.style.transform = 'scale(1)';
}


// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.
var paragraph = document.getElementById('zoom-paragraph');
var fontSize = 16;

function zoomIn() {
  fontSize += 10;
  paragraph.style.fontSize = fontSize + 'px';
}

function zoomOut() {
  fontSize -= 10;
  if (fontSize < 0) {
    fontSize = 0;
  }
  paragraph.style.fontSize = fontSize + 'px';
}
