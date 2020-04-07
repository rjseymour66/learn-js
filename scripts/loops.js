'use strict';

/* ############################# LOOPS 1 ############################# */

/*
let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
let list = document.createElement('ul');

// Add your code here
for (let i = 0; i < myArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = myArray[i];
    list.appendChild(li);
}


// Don't edit the code below here!

const section = document.querySelector('section');
section.appendChild(list);
*/

/* ############################# LOOPS 2 ############################# */


/*
let name = 'Mustafa';
//let i = 0;
let para = document.createElement('p');

let phonebook = [
    { name: 'Chris', number: '1549' },
    { name: 'Li Kang', number: '9634' },
    { name: 'Anne', number: '9065' },
    { name: 'Francesca', number: '3001' },
    { name: 'Mustafa', number: '6888' },
    { name: 'Tina', number: '4312' },
    { name: 'Bert', number: '7780' },
    { name: 'Jada', number: '2282' },
]

// Add your code here




for (let i = 0; i < phonebook.length; i++) {

    if (phonebook[i].name === name) {
        para.textContent = phonebook[i].name + ': ' + phonebook[i].number;
        console.log(phonebook[i]);
        break;
    }
}


// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);
*/

/* ############################# LOOPS 3 ############################# */


let i = 500;
let para = document.createElement('p');

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        } 
    }

    return true;
}


// Add your code here

while (i > 2) {

    if (isPrime(i)) {
        para.textContent += i + ' ';
    }
    i--;
}

// Don't edit the code below here!
let section = document.querySelector('section');
section.appendChild(para);