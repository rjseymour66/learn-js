const person = {
    name: {
        first: 'Bob',
        last: 'Smith'
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function () {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function () {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};


let myDataName = 'height';
let myDataValue = '1.75m';
person[myDataName] = myDataValue;

function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function () {
        alert('Hi! I\'m ' + obj.name + '.')
    };
    return obj;
}

/* ############################################# Javascript class ############################################# */

// Called a 'constructor function'
function Person(first, last, age, gender, interests) {
    this.name = {
        first: first,
        last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}

/* ####################################### Javascript Objects ############################################## */

let person1 = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    }
  });

/* ####################################### Javascript Object Constructor ##################################### */

/* create new obj based on any existing object */

let person2 = Object.create(person1);








let ryan = new Person('Ryan');

let p1 = new Person('Bob');
let p2 = new Person('Sara');

p1.name;
p2.name;


ryan.age = 36;
ryan['age'];


function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.calcPerimeter = function () {
        let perim = sideLength * sides;
        console.log(perim);
    }
}

let square = new Shape('square', 4, 5);
square.calcPerimeter();

let triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

function Square(name, sides, sideLength){
    Shape.call(this, name, sides, sideLength);
    constructor()

}