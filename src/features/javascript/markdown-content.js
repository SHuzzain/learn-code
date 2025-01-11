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