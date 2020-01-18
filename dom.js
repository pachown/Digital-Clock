//Digital clock app JavaScript

//Update functions every second
var updateYear = setInterval(updatedYear, 1000);
var updateMonth = setInterval(updatedMonth, 1000);
var updateDay = setInterval(updatedDay, 1000);
var updateHoursMinutesSeconds = setInterval(updatedHoursMinutesSeconds, 1000);

//Update Year
function updatedYear() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById('year').innerHTML = year.toString();
}
//Update month & transform from number to month string
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
    document.getElementById('month').innerHTML = month.toString();
}
//Update day of month
function updatedDay() {
    var today = new Date();
    var day = today.getDate();
    document.getElementById('date').innerHTML = day.toString();
}

//time function with exceptions for AM/PM at specific times of day

function updatedHoursMinutesSeconds() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var hoursMinutesSeconds
            if(hours <= 11) {
                earlySeconds = seconds+'AM';
                hoursMinutesSeconds = hours +':'+ minutes+':'+ earlySeconds;
            } else if (hours === 12){
                noonSeconds = seconds+'PM';
                hoursMinutesSeconds = hours +':'+ minutes+':'+ noonSeconds;
            } else if (hours === 24) {
                (midnightSeconds = seconds+'AM') && (midnightHours = hours-12);
                hoursMinutesSeconds = midnightHours +':'+minutes+':'+ midnightSeconds;
            } else {
                (lateSeconds = seconds+'PM') && (lateHours = hours-12);
                hoursMinutesSeconds = lateHours +':'+ minutes+':'+ lateSeconds;
            }
    document.getElementById('time').innerHTML = hoursMinutesSeconds.toString();
    clearInterval(updatedMilitaryTime);
}

// var buttonMilitary = document.getElementById('btn').addEventListener('click', updatedMilitaryTime);

// function updatedHoursMinutesSeconds(cancel) {
//     var today = new Date();
//     var hours = today.getHours();
//     var minutes = today.getMinutes();
//     var seconds = today.getSeconds();
//     var amPM
//     var hoursMinutesSeconds
//         if (cancel===0) {
//             amPM = setInterval() {
//         //Still trying to get if statements to work with the button.
//             if(hours <= 11) {
//                 earlySeconds = seconds+'AM';
//                 hoursMinutesSeconds = hours +':'+ minutes+':'+ earlySeconds;
//             } else if (hours === 12){
//                 noonSeconds = seconds+'PM';
//                 hoursMinutesSeconds = hours +':'+ minutes+':'+ noonSeconds;
//             } else if (hours === 24) {
//                 (midnightSeconds = seconds+'AM') && (midnightHours = hours-12);
//                 hoursMinutesSeconds = midnightHours +':'+minutes+':'+ midnightSeconds;
//             } else {
//                 (lateSeconds = seconds+'PM') && (lateHours = hours-12);
//                 hoursMinutesSeconds = lateHours +':'+ minutes+':'+ lateSeconds;
//             }}}
//         if (cancel===1)
            
//     document.getElementById('time').innerHTML = hoursMinutesSeconds.toString();
// }