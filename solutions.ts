// Problem - 01  --------------------------------------------------------------

const filterEvenNumbers = (array: number[]) => {
  return array.filter((element) => element % 2 == 0);
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem - 02  --------------------------------------------------------------

const reverseString = (value: string) => {
  return value.split("").reverse().join("");
};
// console.log(reverseString("typescript"));

// Problem - 03  --------------------------------------------------------------

type CheckType = string | number;

const checkType = (value: CheckType) => {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
};

// console.log(checkType("asad"));
// console.log(checkType(22));

// Problem - 04  --------------------------------------------------------------

type User = {
  id: number;
  name: string;
  age: number;
};

const getProperty = <T>(obj: T, key: keyof T) => {
  return obj[key];
};

const user: User = { id: 1, name: "John Doe", age: 21 };

// console.log(getProperty(user, "name"));
// console.log(getProperty(user, "age"));

// Problem - 05  --------------------------------------------------------

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (value: Book) => {
  return {
    ...value,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

// console.log(toggleReadStatus(myBook));

// Problem - 06  -------------------------------------------------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());


// Problem - 07  --------------------------------------------------

const getIntersection = (arr1: number[], arr2: number[]) => {
  return arr1.filter((item) => arr2.includes(item));
};

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
