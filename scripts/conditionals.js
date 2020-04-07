'use strict';

const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';


let update = (bgColor, textColor) => {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = () => {
    (select.value === 'black') ? update('black', 'white') : update('red', 'white');
}







let output = document.querySelector('.output');
let button = document.querySelector('.countdown');


let countdown = () => {
    output.innerHTML = '';

    for(let i = 10; i >= 0; i--) {
        const para = document.createElement('p');  
    
        if (i === 0) {
            para.textContent = 'Blastoff!'
        } else {
            para.textContent = `Countdown ${i}`;
        }
        output.appendChild(para);
    }
}



const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for (let i = 0; i < people.length; i++) {
    if (people[i].includes('Phil') || people[i].includes('Lola')) {
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';;
    }
}
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2);
refused.textContent = refused.textContent.slice(0, refused.textContent.length - 2);
// let i = 0;

// refused.textContent += ;
// admitted.textContent += ;