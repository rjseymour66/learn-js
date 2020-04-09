const input = document.querySelector('.numberInput');
const para = document.querySelector('p');

function squared(num) {
    return num * num;
}

function cubed(num) {
    return num * num * num;
}

function factorial(num) {
    let x = num;
    while (x > 1) {
        num *= x - 1;
        x--;
    }
    return num;
}

let sqroot = (num) => {
    return Math.sqrt(num);
}

input.onchange = function () {
    const num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
            num + ' cubed is ' + cubed(num) + '. ' +
            num + ' factorial is ' + factorial(num) + '.' + 
            num + ' square root is ' + sqroot(num) + '.';
    }
}