// ************************************************** XHR

/*
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.oncharge = function() {
    const verse = verseChoose.value;
    updateDisplay(verse);
}

let updateDisplay = (verse) => {
    verse = verse.replace(' ', '');
    verse = verse.toLowerCase();
    let url = verse + '.txt';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
        poemDisplay.textContent = request.response;
    }
    request.send();
}


updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
*/

const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.oncharge = function() {
    const verse = verseChoose.value;
    updateDisplay(verse);
}

let updateDisplay = (verse) => {
    verse = verse.replace(' ', '');
    verse = verse.toLowerCase();
    let url = '/resources/' + verse + '.txt';

    fetch(url).then(function(response) {
        response.text().then(function(text) {
            poemDisplay.textContent = text;
        });
    });
}


updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';