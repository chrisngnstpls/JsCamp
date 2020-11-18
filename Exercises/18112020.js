/*
18/11/2020
---------------------------
Event handling continued
--------------------------- 

approaches:
    (1): inline Hook
    (2): Event property approach
    (3): event listener with function
    (4): event listener with anonymous function

removing event listeners :
    removeEventListener() (will not work with anonymous functions)


*/

//Switch button example. Toggle?

function changeText(){
    let myButton = document.querySelector('#button');
    let myValue = myButton.value;
    if(myValue=='On'){
        myButton.value='Off'
    } else { myButton.value='On'}
};


function changeColor(){
    
    document.getElementById('header').style.color='blue';

};
function changeAgain(){
    document.getElementById('header').style.color='red';
};