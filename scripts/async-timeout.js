// let myGreeting = setTimeout(function() {
//     alert('Hello, Ryan!')
// }, 2000)

/* ############################## // with a named function */

// let myGreeting = setTimeout(function sayHi() {
//     alert('Hello, Ryan!')
// }, 2000)

/* ############################## with a function defined separately */
// function sayHi() {
//     alert('Hi Ryan!!!');
// }

// let myGreeting = setTimeout(sayHi, 2000);


/* ############################## with a parameter */

// function sayHi(who) {
//     alert(`Hello, ${who}!`)
// }

// let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');
// myGreeting()

/* ############################## clearing timeouts */

// let quit = clearTimeout(myGreeting);
// let goAway = setTimeout(quit, 3000);


/* ############################## setInterval() */

// let displayTime = () => {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     document.getElementById('.clock').textContent = time;
// }

// displayTime();

// const createClock = setInterval(displayTime, 1000);

// clearInterval(myInterval);

let secondCount = 0;
let stopWatch;
const displayPara = document.querySelector('.timer-text');

let displayCount = () => {

    // calculate times
    let hours = Math.floor(secondCount/3600);
    let minutes = Math.floor(secondCount % 3600 / 60);
    let seconds = Math.floor(secondCount % 60);

    // leading zeroes 
    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

    // format time in p element
    displayPara.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds; 

    // increment the second counter
    secondCount++;
}

// button hooks
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

// run displayCount() 1x per second when start is clicked
start.addEventListener('click', () => {
    stopWatch = setInterval(displayCount, 1000);
    start.disabled = true;
});

// clear when stop is pressed 
stop.addEventListener('click', () => {
    clearInterval(stopWatch);
    start.disabled = false;
});

// set clock to 0 when reset is clicked
reset.addEventListener('click', () => {
    clearInterval(stopWatch);
    start.disabled = false;
    secondCount = 0;
    displayCount();
});

displayCount();