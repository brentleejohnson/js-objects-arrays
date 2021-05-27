// Object Task
let person = {
  name: "Brent",
  age: 19,
};

console.log(person);

// Dot Notation
person.name = "Johnson";
console.log(person.name);

// Bracket Notation
person["age"] = 20;
console.log(person["age"]);

// Array Task
let selectedColors = ["red", "blue"];
console.log(selectedColors);

console.log(selectedColors[0]);

// Lengths are dynamic
selectedColors[2] = "green";
console.log(selectedColors);

// Properties using the dot(.)
console.log(selectedColors.length);

// Exercise
let person1 = {
  name: "Brent Lee",
  age: 19,
};

let person2 = {
  name: "Johnson",
  age: 20,
};

console.log(person1);
console.log(person2);

let personArray = [person1, person2];
console.log(personArray);

// In-Class Exercise
/* let personn = {
  name: ["Godwin", "Khanya", "Brent"],
  surname: ["Abrahams", "Gope", "Johnson"],
  age: [30, 24, 19],
};

console.log(personn); */

let p = {
  p1: { name: "Godwin", surname: "Abrahams", age: 30 },
  p2: { name: "Khanya", surname: "Gope", age: 24 },
  p3: { name: "Brent", surname: "Johnson", age: 19 },
};

console.log(p);
console.log(p.p1);
console.log(p.p3.name);
