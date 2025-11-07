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


interface Director extends Teacher{
    // firstName : string,
    // lastName : string,
    // fullTimeEmployee : boolean,
    // location : string,
    numberOfReports: number
}

const director : Director = {
    firstName : "jane",
    lastName : "rose",
    fullTimeEmployee : true,
    location : "eygpt",
    numberOfReports : 3,
}
// Interface that describes the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface that describes the constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// The StudentClass implementing the interface
class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}


console.log(director);
const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework()); // Output: Currently working


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
}


console.log(printTeacher({ firstName: "John", lastName: "Doe" }));
