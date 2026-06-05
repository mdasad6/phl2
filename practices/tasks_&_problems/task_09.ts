// Task 9: The Wrapper (HARD)

// Concepts: Conditional Types

// Scenario: Create a type that acts as a logic gate, returning "Large" for arrays and
// "Small" for anything else.

// Instructions:--------------------------
// 01. Create a type DataType<T>.
// 02. If T extends an array, the type should be "Large".
// 03. Otherwise, it should be "Small".

// Hint: Use the ternary syntax: T extends any[] ? "Large" : "Small".

// Solution :

type DataType<T> = T extends any[] ? "Large" : "Small";

type data = DataType<number[]>; // Large

type data01 = DataType<string>; // Small
