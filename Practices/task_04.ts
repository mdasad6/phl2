// Task 4: Type Assertion (MEDIUM)

// Concepts: Type Assertion (as), unknown type

// Scenario: You receive a value from a 3rd-party library typed as unknown. You are
// certain it's a string and need to manipulate it.

// let secretValue: unknown = "typescript is awesome";

// Instructions:------------------------------
// 01. Create a variable upperValue.
// 02. Assign secretValue to it using Type Assertion.
// 03. Call .toUpperCase() on the resulting value.

// Hint: Use the value as string syntax.

// Solution:

let secretValue: unknown = "typescript is awesome";

const upperValue = secretValue;

console.log((upperValue as string).toUpperCase());

//this is optional

// const getTextToUpperCase = (value: unknown) => {
//   if (value as string) {
//     return (value as string).toUpperCase();
//   }
// };

// console.log(getTextToUpperCase(secretValue));
