// Task 3: The "Safe" Data Fetcher (MEDIUM)

// Concepts: Optional Chaining (?.), Nullish Coalescing (??)

// Scenario: API responses can be unpredictable. You need to safely access a deep
// property without causing a crash.

// type UserResponse = {
//   info?: {
//     address?: {
//       zipCode?: string;
//     };
//   };
// };

// Instructions:------------------------------
// 01. Write a function getZipCode that reaches deep into the object.
// 02. If any part of the path is missing, or if the zipCode is null/undefined, return
// 03. "00000".

// Hint: Chain ?. for every level and end with ?? "00000".

// Solution :

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const getZipCode = (value: UserResponse): string => {
  return value?.info?.address?.zipCode ?? "00000";
};

const userResponse = {
  info: {
    address: {
      //   zipCode: "1234567890",
    },
  },
};

console.log(getZipCode(userResponse));
