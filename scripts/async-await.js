/*
async function hello () { 
    return greeting = await Promise.resolve("Hello");
};
hello().then(alert);

let goodbye = async () => {
    return 'Goodbye'
}

goodbye().then((value) => console.log(value))
*/
/*
async function myFetch() {
    let response = await fetch('images/coffee.jpg');
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}

myFetch()
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
*/
// OR 

/*
async function myFetch() {
    let response = await fetch('/images/coffee.jpg');
    return await response.blob();
}

myFetch().then((blob) => {
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}).catch(e => console.log(e));
*/
// ######################################################## With error handling

async function myFetch() {
    try {
        let response = await fetch('/images/coffee.jpg');
        let myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    } catch (e) {
        console.log(e);
    }
}

myFetch();

// ######################################################## Class methods

class Person {
    constructor(first, last, age, gender, interests) {
        this.name = {
            first,
            last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    async greeting() {
        return await Promise.resolve(`Hi! I'm ${this.name.first}`);
    };

    farewell() {
        console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);