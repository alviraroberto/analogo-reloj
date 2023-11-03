setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');


function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)



}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


 function dating() {
    var weekly = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],

    d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),
    date = d.getDate(),
    month = d.getMonth(),
    year = d.getFullYear(),

    dateEl = document.querySelector('.date');
    wdayEl = document.querySelector('.weekday');

    var day = weekly[d.getDay()];

if(month < 9) {
    month = "0"+month;
}

dateEl.innerHTML = date+"/"+month+"/"+year;
wdayEl.innerHTML = day;

}


dating()