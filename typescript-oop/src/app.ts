// Procedural programming way

// const baseSalary = 30000;
// const overtime = 10;

// function getWage(baseSalary: number, overtime: number): number {
//     return baseSalary + overtime * 1.5;
// }
// console.log(getWage(baseSalary, overtime));

// OOP way
// const employee = {
//     baseSalary: 30000,
//     overtome: 10,
//     // Uncle Bob -> the best function is the function with no params
//     getWage: function (): number {
//         return this.baseSalary + this.overtome * 1.5;
//     }
// };
// console.log(employee.getWage());

// const car = {
//     speedLimit: 120,
//     suspention: 'air',
//     color: 'green',
//     detColor: function () {
//       return  this.color;
//     },
// }

/** Core principles of OOP */

// interface Details{
//     getDetails: () => void;
// }
// class  Person implements Details{
//    private eyeColor: string;
//    private skinColor: string;
//    constructor(eyeColor: string, skinColor: string){
//     this.eyeColor = eyeColor;
//     this.skinColor = skinColor;
//    }

//   public getDetails(): void{
//     console.log(`Hello my eyes are ${this.eyeColor}, and my skin is ${this.skinColor}.`);
//    }
// }

// class Computer implements Details{
//     private color: string;
// constructor(color: string){
//     this.color = color;
// }
//     public getDetails(): void{
//         console.log(`Hello, this computer is ${this.color} color.`);
//        }
// }

// const person = new Person('green', 'white');
// person.getDetails();

// const comp = new Computer('red');
// comp.getDetails();


/** SOLID Principles */

class Student{
    studentId: number;
    firstName: string;
    lastName: string;

constructor(studentId: number, firsName: string, lastName: string){
    this.studentId = studentId;
    this.firstName = firsName;
    this.lastName = lastName;
}

    save(): void{
        // save student record to database
    }

    email(): void{
        // to send email from the student
    }

    enrol(): void{
        // to enrol student in a course
    }
}