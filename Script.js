//Digital clock app JavaScript
//Start clock function & set interval
var date = new Date();
clock(date);
calendar(date);

window.onload = setInterval(function () {
    var date = new Date();
    clock(date);
    calendar(date);
}, 1000);

//Update functions every second
function clock(today) {
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var time = '';

    if (hours <= 11) {
        time = `${hours}:${minutes}:${seconds} AM`;
    } else if (hours === 12) {
        time = `${hours}:${minutes}:${seconds} PM`;
    } else if (hours === 24) {
        time = `${hours - 12}:${minutes}:${seconds} AM`;
    } else {
        time = `${hours - 12}:${minutes}:${seconds} PM`;
    }

    document.getElementById('time').innerHTML = time.toString();
}

function calendar(today) {
    let dateString = `${getDay(today)} ${getMonth(today)} ${today.getDay()}, ${today.getFullYear()}`;
    document.getElementById('calendar').innerHTML = dateString

}

function getDay(date) {
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return day[date.getDay()];
}

function getMonth(date) {
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return month[date.getMonth()];
}
