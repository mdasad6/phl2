// Task 5: Generic Constraints (MEDIUM)

// Concepts: Generics, Extends Constraint

// Scenario: You want a function that logs the length of various inputs (strings, arrays)
// but rejects types that don't have a .length.

// Instructions:-----------------------------------
// 01. Write a generic function logLength<T>(input: T).
// 02. Constrain T to ensure it must have a length property of type number.
// 03. Return the length value.

// Hint: Use <T extends { length: number }>.

// Solution :

const logLength = <T extends { length: number }>(input: T): number => {
  return input.length;
};

// const usernumber = [
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
//   "1",
//   "2",
// ];

// const object = {
//   name: "asad",
//   age: 21,
//   roll: 2262091129,
//   department: "cst",
//   length: 5,
// };

// console.log(logLength(object));
