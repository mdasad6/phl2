// Task 1: The "Optional" Shopping Cart

// Concepts: Destructuring, Optional Properties, Default Values

// Scenario: You are building a checkout system. Users might buy one item by default,
// or specify a bulk quantity.

// type CartItem = {
// name: string;
// price: number;
// quantity?: number;
// };

// Instructions:--------------------------
// 01. Write a function calculateTotal that takes a CartItem object.
// 02. Use Destructuring to extract properties.
// 03. If quantity is missing, ensure the calculation treats it as 1.
// 04. Return the total cost (price * quantity).

// Hint: Set a default value during destructuring: { quantity = 1 } = item.

// Solution:

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = ({ price, quantity = 1 }: CartItem): number => {
  return price * quantity;
};

const cartItem = { name: "supaer car", price: 100, quantity: 10 };

console.log(calculateTotal(cartItem));
