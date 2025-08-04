let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.getElementById('displaytime');
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // displaytime is h1's id in that time will be displayed
    displaytime.innerHTML = h + ":" + m + ":" + s;
}

//setInterval -> in JavaScript is used to repeatedly execute a function or piece of code at specified intervals (in milliseconds)

function watchstart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchstop() {
    clearInterval(timer);
}

function watchreset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    displaytime.innerHTML = "00:00:00";
}

