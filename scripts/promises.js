/*
let promise = fetch('images/coffee.jpg');
let promise2 = promise.then(response => response.blob());

let promise3 = promise2.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
});
*/


fetch('images/coffee.jpg')
    .then(response => response.blob())
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });

// ############################################################################ Promise.all

/*
let a = fetch(url);
let b = fetch(url);
let c = fetch(url);

Promise.all([a, b, c]).then(values => {

});
*/

/*
function fetchAndDecode(url, type) {
    return fetch(url).then(response => {
      if (type === 'blob') {
        return response.blob();
      } else if (type === 'text') {
        return response.text();
      }
    })
    .catch(e => {
      console.log('There has been a problem with your fetch operation: ' + e.message);
    })
    .finally(() => {
        console.log(`fetch attempt for "${url}" finished.`);
    })
  }


let coffee = fetchAndDecode('images/coffee.jpg', 'blob');
let tea = fetchAndDecode('images/tea.jpg', 'blob');
let description = fetchAndDecode('resources/description.txt', 'text');

Promise.all([coffee, tea, description]).then(values => {
    console.log(values);
    // Store each value returned from the promises in separate variables; create object URLs from the blobs
    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);
    let descText = values[2];
    
    // Display the images in <img> elements
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = objectURL1;
    image2.src = objectURL2;
    document.body.appendChild(image1);
    document.body.appendChild(image2);
    
    // Display the text in a paragraph
    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);
});
*/

// ############################################################################ Promise constructor

// resolve
/*
let timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Success!');
    }, 2000)
});

timeoutPromise
.then((message) => {
    alert(message);
})
*/

// reject

function timeoutPromise(message, interval) {
    return new Promise((resolve, reject) => {
        if (message === '' || typeof message !== 'string') {
            reject('Message is empty or not a string');
        } else if (interval < 0 || typeof interval !== 'number') {
            reject('Interval is negative or not a number');
        } else {
            setTimeout(function () {
                resolve(message);
            }, interval);
        }
    });
};

timeoutPromise('Hello there!', 1000)
    .then(message => {
        alert(message);
    })
    .catch(e => {
        console.log('Error: ' + e);
    });

function promisifyRequest(request) {
    return new Promise(function (resolve, reject) {
        request.onsuccess = function () {
            resolve(request.result);
        };

        request.onerror = function () {
            reject(request.error);
        };
    });
}