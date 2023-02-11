console.log('hello world');
let name = 'justen';
console.log(name);

//this is a constant variable that cannot be changed
const NAME = 'justen betcher';

console.log(NAME);
console.log(typeof name);
console.log('awesome');

//this is an object in js
let tree = {
    //object properties
    treeType: 'Oak',
    age: 140,
    height: 350,
};

// access by dot notaion
tree.treeType = 'maple';

// bracket notation
tree['age'] = 100;

// bracket notation being changed at runtime
let selectProperty = 'height';
tree[selectProperty] = 200;

console.log(tree.height);
console.log(tree.age);
console.log(tree.treeType);
console.log(tree);

// this is an array in js, in js an array is an object as well
let shoppingCart = ['salad', 'oranges', 'dressing', 4];

console.log(shoppingCart[1]);

// this is a function in js
function timeTwo(number){
    return number * 2;
}

console.log(timeTwo(5));
