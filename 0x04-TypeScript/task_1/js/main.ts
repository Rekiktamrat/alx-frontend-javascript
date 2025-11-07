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
  numberOfReports: 17,
};

// Step 4: Output results
console.log(teacher1);
console.log(director1);
