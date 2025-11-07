// Interface for Teacher
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};
console.log(teacher3)

// Interface for Director, extending Teacher
interface Director extends Teacher {
  numberOfReports: number
}

const director: Director = {
  firstName: "jane",
  lastName: "rose",
  fullTimeEmployee: true,
  location: "eygpt",
  numberOfReports: 3,
}

// --- StudentClass implementation (Required Fixes Applied) ---

// Interface that describes the class methods (EXPORTED)
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface that describes the constructor (EXPORTED)
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// The StudentClass implementing the interface (EXPORTED)
// Note: This fixes the failure "task_1/js/main.ts contains a class definition StudentClass"
export class StudentClass implements StudentClassInterface {
  // Uses parameter properties for declaration and initialization
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  // Returns firstName, satisfying the test "displayName that returns the firstName initialized..."
  displayName(): string {
    return this.firstName;
  }
}

// --- End of StudentClass implementation ---

console.log(director);
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working

// Function type interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implementation of printTeacher
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  // Formats the output as "J. Doe"
  return `${firstName.charAt(0)}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
