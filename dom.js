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

////This bitch is finally updating itself! working!

//To-Do - CSS styling, 
//      - putting month, day, year, hour, minute, second each in their own place
