/**
 * Task 1 - Create a Teacher interface
 */

// The `interface` keyword defines a structure (or blueprint) for an object.
// It tells TypeScript: “Any object that wants to be a Teacher must have these properties.”
/**
 * Task 1 & 2 — Teacher and Directors Interfaces
 */

// Step 1: Define the Teacher interface
interface Teacher {
  readonly firstName: string;      // cannot be changed after creation
  readonly lastName: string;       // cannot be changed after creation
  fullTimeEmployee: boolean;       // must be defined
  yearsOfExperience?: number;      // optional
  location: string;                // must be defined
  [key: string]: any;              // allows additional properties
}

// Step 2: Extend Teacher interface to create Directors
// 'extends' means Directors will include everything from Teacher
// plus whatever new properties we define.
interface Directors extends Teacher {
  numberOfReports: number;         // new property required for Directors
}

// Step 3: Example objects
const teacher1: Teacher = {
  firstName: 'Mary',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Addis Ababa',
  contract: true,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // required only for Directors
};

// Step 4: Output results
console.log('Teacher:', teacher1);
console.log('Director:', director1);



interface Teacher {
  readonly firstName: string;      // 'readonly' means this value cannot be changed after creation
  readonly lastName: string;       // same here — immutable once set
  fullTimeEmployee: boolean;       // must always be defined (not optional)
  yearsOfExperience?: number;      // the `?` makes this property optional
  location: string;                // must always be defined

  // This syntax `[key: string]: any` allows *any other properties* to be added dynamically.
  // For example: contract: boolean or any future unknown property.
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;         // new property required for Directors
}

// Now let’s create an example teacher object following that interface:
const teacher1: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  yearsOfExperience: 10,
  contract: true, // This is not declared in the interface, but allowed due to [key: string]: any
};

// Another example where we skip the optional property:
const teacher2: Teacher = {
  firstName: 'Mary',
  lastName: 'Smith',
  fullTimeEmployee: false,
  location: 'New York',
  contract: false,
};
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17, // required only for Directors
};

// Log them to the console to see what they look like
console.log(teacher1);
console.log(teacher2);
console.log('Director:', director1);
console.log('Teacher:', teacher1);

