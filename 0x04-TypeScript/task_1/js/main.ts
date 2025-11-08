interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;

}

interface Director extends Teacher {
numberOfReports: number;
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}


function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
    return `${firstName}. ${lastName}`;
}
const teacher3: Teacher = {
firstName: 'John',
fullTimeEmployee: false,
lastName: 'Doe',
location: 'London',
contract: false

}

const director1: Director = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17
}

console.log(director1)

console.log(teacher3)

printTeacher({ firstName: "John", lastName: "Doe" });


class StudentClass {
    firstName: string;
    lastName: string;

     constructor(firstName: string, lastName: string) {
        this.firstName = firstName; 
        this.lastName = lastName;    
    }

      workOnHomework(): string {
        return "Currently working";
    }

 
    displayName(): string {
        return this.firstName;
    }
}