const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function rotateClockHand(element,rotation){
    element.style.setProperty('--rotate', rotation * 360);
}

function clockTick(){
    const date = new Date();
    const seconds= date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;

    rotateClockHand(secondHand, seconds);
    rotateClockHand(minuteHand, minutes);
    rotateClockHand(hourHand, hours);

}

setInterval(clockTick, 1000)