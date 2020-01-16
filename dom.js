//Digital clock app JavaScript

//var updateClock = setInterval(updatedClock, 1000);
var updateYear = setInterval(updatedYear, 1000);
var updateMonth = setInterval(updatedMonth, 1000);
var updateDay = setInterval(updatedDay, 1000);
var updateHoursMinutesSeconds = setInterval(updatedHoursMinutesSeconds, 1000);

//This function works but doesn't give specific information to specific IDs, so it is scrapped for now
// function updatedClock() {
//     var today = new Date();
//     document.getElementById('clock').innerHTML = today.toString();
// }

function updatedYear() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById('year').innerHTML = year.toString();
}

function updatedMonth() {
    var today = new Date();
    var monthNumber = today.getMonth();
    
    switch (monthNumber) {
        case 0:
            month='January'
            break;
        case 1:
            month='February'
            break;
        case 2:
            month='March'
            break;
        case 3: 
            month='April'
            break;
        case 4:
            month='May'
            break;
        case 5:
            month='June'
            break;
        case 6:
            month='July'
            break;
        case 7:
            month='August'
            break;
        case 8:
            month='September'
            break;
        case 9:
            month='October'
            break;
        case 10:
            month='November'
            break;
        case 11:
            month='December'
            break;
    }
    month=month
    document.getElementById('month').innerHTML = month.toString();
}

function updatedDay() {
    var today = new Date();
    var day = today.getDate();
    document.getElementById('date').innerHTML = day.toString();
}

function updatedHours() {
    var today = new Date();
    var hours = today.getHours();
    if (hour <= 12) {
        hours = hours+'AM'
    } else {
        hours = hours-12+'PM'
    }

    document.getElementById('hour').innerHTML = hours.toString();
}

function updatedHoursMinutesSeconds () {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
        if (hours <= 12) {
            seconds = seconds+'AM';
        } else {
            (seconds = seconds+'PM') && (hours = hours-12)
        }
    var hoursMinutesSeconds = hours +':'+ minutes+':'+ seconds;
    document.getElementById('time').innerHTML = hoursMinutesSeconds.toString();
}


//      - get button for military time vs AM PM time to work

//This listens for the button click and then activates the function buttonClick
var button = document.getElementById('button').addEventListener('click', buttonClick);

//this function is activated when the button is pressed. Right now it just logs something worthless in the console for testing purposes

