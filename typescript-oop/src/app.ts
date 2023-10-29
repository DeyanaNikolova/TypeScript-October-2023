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

// interface Geo  {
//     lat: number;
//     lng: number;
//   }

// interface Address {
//     street: string;
//     suite: string;
//     city: string;
//     zipcode: string;
//     geo: Geo;
//   }

//   interface Company {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   }

//  interface PersonDetails {
//     id: number;
//     name: string;
//     username: string;
//     email: string;
//     phone: string;
//  }

//  interface User{
//     details: PersonDetails;
//    address: Address;
//     website: string;
//     company: Company;
//   };

//   class Person implements PersonDetails {
//     id: number = 0;
//     name: string = '';
//     username: string = '';
//     email: string = '';
//     phone: string = '';
//   }

// Dependancy Inversion Principle
// class Wallet {
//     balance: number;

//     constructor(balance: number){
//         this.balance = balance;
//     }
// }

// class User{
//     wallet: Wallet;
//     firstName: string;

//     constructor(firstName: string, wallet: Wallet){
//         this.firstName = firstName;
//         this.wallet = wallet;
//     }

//     getWalletBalance(){
//         return `${this.firstName} has ${this.wallet.balance} money in his account.`;
//     }
// }
// const ivansWallet = new Wallet(4000);
// const ivanUser = new User('Ivan', ivansWallet);
// console.log(ivanUser.getWalletBalance());

// const peshosWAllet = new Wallet( 7000);
// const peshoUser = new User('Pesho', peshosWAllet);
// console.log(peshoUser.getWalletBalance());

// Blueprint -> classes
// class Person {
//     // proprerties 
//     firstName: string;
//     age: number;
//     static count: number = 0;
//     // onject instanciation -> object creation
//     constructor(firstName: string, age: number){
//         this.firstName = firstName;
//         this.age = age;
//     }
//     // methods -> behaviour
//     static geetingIncrementor(): number{
//         Person.count++;
//         return Person.count;
//     }
//     greeting(){
//         console.log(`Hello from ${this.firstName}! Greeting counter ${Person.geetingIncrementor()}`);   
//     }
// }
// // instances of a class
// const personMaria = new Person('Maria', 23);
// personMaria.greeting();
// const personIvan = new Person('Ivan', 44);
// personIvan.greeting();
// const personKircho = new Person('Kircho', 50);
// personKircho.greeting();



// Accessors -> setters and getters
class Employee {
    private _firstName: string;

    constructor(firstName: string){
        this._firstName = firstName;
    }

    public get firsName(): string {
        return this._firstName.trim();
    }

    public set firstName(newFirstName: string) {
        if(newFirstName.length < 4){
            throw new Error('First name should be at least 4 characters long!');
        }
        this._firstName = newFirstName;
    }
}

const employeeIvan = new Employee('Ivan');
console.log('firstName', employeeIvan.firsName);
employeeIvan.firstName = 'Ashted';
console.log('firstName', employeeIvan.firsName);

