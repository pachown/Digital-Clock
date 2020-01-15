//Digital clock app JavaScript

//Working but doesn't update itself each second

//getting date & time

//var today = new Date();
//var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date+' '+time;
//document.getElementById('clock').innerHTML = dateTime.toString();


var updateEverySecond = setInterval(updatedClock, 1000);

function updatedClock() {
    var today = new Date();
    document.getElementById('clock').innerHTML = today.toString();
}

////This is finally updating itself! working!

//To-Do - CSS styling, 
//      - putting month, day, year, hour, minute, second each in their own place

//button for military time vs AM PM

//This listens for the button click and then activates the function buttonClick
var button = document.getElementById('button').addEventListener('click', buttonClick);

//this function is activated when the button is pressed. Right now it just logs something worthless in the console for testing purposes
//function buttonClick(){
//    console.log('Button clicked');
//}

