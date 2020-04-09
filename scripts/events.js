/*
const btn = document.querySelector('button');

let random = (number) => {
    return Math.floor(Math.random() * (number + 1))
}

btn.onclick = () => {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
*/

/* ############################## Random Color Event Handlers ############################## */

/*
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
*/

/* ############################## Event Objects ############################## */
/*
const btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange(e) {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}

btn.addEventListener('click', bgChange);
*/
/* ############################## Preventing Default Behavior ############################## */

/*
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.onsubmit = function (e) {
    if (fname.value === '' || lname.value === '') {
        e.preventDefault();
        para.textContent = 'You need to fill in both names!';
    }




let btn = document.querySelector('.off');

// Add your code here

let change = () => {
    if (btn.textContent === 'Machine is off') {
        btn.textContent = 'Machine is on';
    } else if (btn.textContent === 'Machine is on') {
        btn.textContent = 'Machine is off'
    }
}

btn.onclick = change;

*/

let buttonBar = document.querySelector('.button-bar');
let section = document.querySelector('section');

// Add your code here


let bgChange = (e) => {
    buttonBar.style.backgroundColor = e.target.getAttribute('data-color');
}

buttonBar.addEventListener('click', bgChange);