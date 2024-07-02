// Declare variables below to save the different divs of your story.
let opening = document.querySelector(".story-opening");
let option1 = document.querySelector(".option-one-screen");
let option2 = document.querySelector(".option-two-screen");
let option1L = document.querySelector(".option-one-left");
let option1R = document.querySelector(".option-one-right");
let option2L = document.querySelector(".option-two-left");
let option2R = document.querySelector(".option-two-right");
let button1 = document.querySelector(".option-one")
let button2 = document.querySelector(".option-two")
let button1C = document.querySelector(".option-one-conor")
let button2C = document.querySelector(".option-two-conor")
let button1D = document.querySelector(".option-one-diaz")
let button2D = document.querySelector(".option-two-diaz")
let buttonEnd = document.querySelector(".buttonEnd")
let img1 = document.querySelector(".img1")
let img2 = document.querySelector(".img2")
let buttons = document.querySelector(".buttons")
let buttons1 = document.querySelector(".buttons1")
let buttons2 = document.querySelector(".buttons2")
let endSCR = document.querySelector(".end")
let buttonE = document.querySelector(".endResult")





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


button1.addEventListener('click', function(){
    opening.style.display="none";
    buttons.style.display="none";
    option1.style.display="block";
    buttons1.style.display="block";
});

button2.addEventListener('click', function(){
    opening.style.display="none";
    buttons.style.display="none";
    option2.style.display="block";
    buttons2.style.display="block";
});


// Conor
button1C.addEventListener('click', function(){
    option1.style.display="none";
    buttons1.style.display="none";
    option1L.style.display="block"
    buttonEnd.style.display="block"
});

button2C.addEventListener('click', function(){
    option1.style.display="none";
    buttons1.style.display="none";
    option1R.style.display="block"
    buttonEnd.style.display="block"
});

// Diaz
button1D.addEventListener('click', function(){
    option2.style.display="none";
    buttons2.style.display="none";
    option2L.style.display="block"
    buttonEnd.style.display="block"
});

button2D.addEventListener('click', function(){
    option2.style.display="none";
    buttons2.style.display="none";
    option2R.style.display="block"
    buttonEnd.style.display="block"
});

buttonE.addEventListener('click', function(){
    option1L.style.display="none";
    option1R.style.display="none";
    option2L.style.display="none";
    option2R.style.display="none";
    buttonEnd.style.display="none";
    endSCR.style.display="block";
})