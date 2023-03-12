//output somethting to the console on your browser
console.log('Hello');

//output somethingg to the webpage using an id
document.getElementById('test').innerHTML = 'Hello';

//creating a variable
let x = 5;

//creating an array, can have any type insite including other arrays or objects
const everything = [
    'hello',
    15,
    true,
    false
]

//creating an object
const Cup = {
    //properties ( they have to be defined or set to null )
    material: 'glass',
    liquid: 'wine',
    price: 20
}

//creating an object using a constructor so you can create many reference variables to the same object
//doing it this way also automatically makes Person a class after all if you can make referance variables,
//which are objects, that means there is a class because an object is just an instance of a class
function Person(firstName, lastName, job, id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this.id = id;
}

function Sum5(num)
{
    return num+num;
}
console.log(Sum5(5));

//another way of creating a class
class Company {
    //class attributes, or properties
    companyName;
    grossDomesticProduct;
    quantityOfWorkers;

    //constructor
    constructor (name, product, workers){
        companyName = name;
        grossDomesticProduct = product;
        quantityOfWorkers = workers;
    }
}

//a quicker way of making a class with properties, or attributes.
class car {
    constructor (size, weight, color, type){
        this.size = size;
        this.weight = weight;
        this.color = color;
        this.type = type;
    }
}


const sedan = new car(50, 1200, 'blue', 'sedan');
console.log(sedan);

let date = new Date();
console.log(date);

class SchoolBooks {
    book1;
    book2;
    book3;
}

const books = SchoolBooks;
const paper = SchoolBooks;

console.log('hello')
console.log(typeof books == typeof SchoolBooks);
