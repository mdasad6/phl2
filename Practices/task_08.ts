// Task 8: The "Draft" Mode (HARD)

// Concepts: Mapped Types, Readonly, Optional

// Scenario: Transform a strict interface into a "Draft" version where everything is
// optional and immutable.

// interface MyDocument {
// title: string;
// content: string;
// author: string;
// }

// Instructions:--------------------------------------
// 01. Create a Mapped Type Draft<T>.
// 02. Iterate through all keys of T, making them readonly and ? (optional).
// 03. Declare a variable myDraft of type Draft<MyDocument>.

// Hint: { readonly [P in keyof T]?: T[P] }.

// Solution :

interface MyDocument {
  title?: string;
  content?: string;
  author?: string;
}

const mydoc: MyDocument = {
  title: "this is my title",
  author: "asad",
};

type Draft<T> = { readonly [P in keyof T]?: T[P] };

const myDraft: Draft<MyDocument> = mydoc;

console.log(myDraft);
