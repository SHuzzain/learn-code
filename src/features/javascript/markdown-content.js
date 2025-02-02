export const greetingExample = `
// Displaying a greeting message in the console
console.log("Hello, World!");
`;

export const arrowFunction = `
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;
`
export const callBackFunction = `
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

greet("Alice", () => {
  console.log("Welcome to JavaScript!");
});

`
export const eventLoop = `
console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 1000);

console.log("End");

//Output: Start > End > Callback

`

export const functionScope = `
var a = 10;
let b = 20;
const c = 30;
`

export const objectColloection = `
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log("Hi! I am " + this.name);
  }
};

person.greet();
`

export const thisKey = `
const obj = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

obj.greet(); // Alice
`

export const bindingThis = `
function greet() {
  console.log(this.name);
}

const person = { name: "Alice" };
greet.call(person); // Alice
`

export const arrowFunctionThis = `
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

new Person();
`

export const arrayMapFunction = `
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
`