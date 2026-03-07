// Pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));


// Immutability example
const numbers = [1, 2, 3];

const newNumbers = numbers.map(n => n * 2);

console.log(numbers);
console.log(newNumbers);


// Higher-order function
function operate(a, b, operation) {
  return operation(a, b);
}

const result = operate(4, 5, add);
console.log(result);


// Function composition
const double = x => x * 2;
const square = x => x * x;

const compose = (f, g) => x => f(g(x));

const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3));