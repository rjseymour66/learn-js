fetch('products.json').then(function (response) {
    return response.json();
}).then(function (json) {
    products = json;
    initialize();
}).catch(function (err) {
    console.log('Fetch problem: ' + err.message);
});


console.log('Starting');
let image;

fetch('coffee.jpg').then((response) => {
    console.log('It worked :)')
    return response.blob();
}).then((myBlob) => {
    let objectURL = URL.createObjectURL(myBlob);
    image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).then(() => {
    console.log('All done! ' + image.src + ' displayed.');
}).catch((err) => {
    console.log('There has been a problem with your fetch operation: ' + err.message);
});