/**
 * Task 1 - Create a Teacher interface
 */

// The `interface` keyword defines a structure (or blueprint) for an object.
// It tells TypeScript: “Any object that wants to be a Teacher must have these properties.”
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

// Log them to the console to see what they look like
console.log(teacher1);
console.log(teacher2);
