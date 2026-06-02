// Task 7: Constant Literal Types (HARD)

// Concepts: as const, typeof, Index Access Types

// Scenario: Define fixed theme colors that serve as the single source of truth for your
// application.

// const Colors = {
// Primary: "RED",
// Secondary: "BLUE"
// } as const;

// Instructions:---------------------------------
// 01. Create a type ValidColor derived directly from the values of the Colors
// 02. object.
// 03. Write a function setColor(c: ValidColor) that only accepts "RED" or "BLUE".

// Hint: type ValidColor = typeof Colors[keyof typeof Colors].

// Solution :

const Colors = {
  Primary: "RED",
  Secondary: "BLUE",
} as const;

type ValidColor = (typeof Colors)[keyof typeof Colors];

const setColor = (c: ValidColor): string => {
  return c;
};

console.log(setColor("BLUE"));
