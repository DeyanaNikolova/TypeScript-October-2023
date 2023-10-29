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
// Single responsibility
// class StudentDemo{
//     studentId: number;
//     firstName: string;
//     lastName: string;

// constructor(studentId: number, firsName: string, lastName: string){
//     this.studentId = studentId;
//     this.firstName = firsName;
//     this.lastName = lastName;
// }

//     save(): void{
//         // save student record to database
//     }

//     email(): void{
//         // to send email from the student
//     }

//     enrol(): void{
//         // to enrol student in a course
//     }
// }

// class EmailService{
//     // email functionality
// }
// class Student{
//     // details for the student: id, fname, lname
// }
// class EnrollmentService{
//     // enrollment functionality
// }
// class StudentRepository{
//     // CRUD
//     // REpository classes -> responsible for the DB communication
// }

// Open-closed principle
// class Car{
//     protected color: string;

//     constructor(color: string){
//         this.color = color;
//     }

//     getColor(){
//         return this.color;
//     }
// }

// class BMW extends Car{
//     private serialNumber: string;

//     constructor(color: string, serialNumber: string){
//         super(color);
//         this.serialNumber = serialNumber;
//     }
//     getDetails(){
//     console.log(this.color + ' - ' + this.serialNumber);
    
//     }
// }
// const myBMW = new BMW('red', 'HDnmwi"£$2327655');
// console.log(myBMW.getColor());
// myBMW.getDetails();

// Interface Segregation Principle
interface Geo  {
    lat: number;
    lng: number;
  }

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }

  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

 interface PersonDetails {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
 }

 interface User{
    details: PersonDetails;
   address: Address;
    website: string;
    company: Company;
  };

  class Person implements PersonDetails {
    id: number = 0;
    name: string = '';
    username: string = '';
    email: string = '';
    phone: string = '';
  }