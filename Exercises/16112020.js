/* 
Class notes 16112020 JavaScript 
--------------------------------
Time Methods


var timeoutID;
function clearAlert(){
    timeoutID = window.setTimeout(window.alert, 2*1000, 'Delayed function by 2 seconds.');
};

function clearAlert(){
    window.clearTimeout(timeoutID)
};



const par = document.querySelector("p");

function showtime(){

    const date2 = new Date();
    const currentHour = date2.getHours();
    const currentMin = date2.getMinutes();
    const currentSec = date2.getSeconds();
    par.innerHTML = "<span style = 'color:green'>" + currentHour + ":" + currentMin + ":" + currentSec+"</span>";
};

setInterval(showtime,1000);
setTimeout(function() {
    alert("Spaw mpala kathe 5 sec");},5000
);

*/
// Cookie examples 
/*
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = 'expires='+d.toUTCString();
    document.cookie=cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i=0;i<ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' '){
            c =c.substring(1);
        };
        if (c.indexOf(name)==0) {
            return c.substring(name.length, c.length);
        };
    }
    return "";
}
*/


var sampleString = 'name;surname;dateofbirth;location'

function iterateExample(){
    var myArray = sampleString.split(';'); //<--- string.split method returns strings split @ the argument character passed and stores STRINGS in an ARRAY.
    for (let i=0;i<myArray.length;i++){
        console.log(myArray[i]);

    };
}

iterateExample();