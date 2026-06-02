// Task 2: Merging User Profiles (EASY)

// Concepts: Intersection Types (&)

// Scenario: A user signs up as a basic Person, but when hired, they gain
// JobDetails. An Employee is a union of both.

// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };

// Instructions:-----------------------------
// 01. Create a new type Employee that combines Person and JobDetails.
// 02. Write a function getProfile that accepts an Employee.
// 03. Return a string: "Name: [name], Role: [role]".

// Hint: Use the & operator to merge the two types.

// Solution:

type Person = { name: string; age?: number };
type JobDetails = { role: string; salary?: number };

type Employee = Person & JobDetails;

const getProfile = ({ name, role }: Employee): string => {
  return `Name: ${name}, Role: ${role}`;
};

const employee = { name: "Asad", role: "677286" };
console.log(getProfile(employee));
