// interface client {
//     id: number,
//     balance: number,
// }
 
// class BankAccount {
//     private _id: number;
//     private _balance: number;
//     private _interestRate: number = 0.02;
 
//     private clients: client[] = [];
//     private activity: string[] = [];
 
//     constructor() {
//         this._id = 0;
//         this._balance = 0;
//     }
 
//     public create(): void {
//         this._id += 1;
//         this.clients.push({
//             id: this._id,
//             balance: 0
//         });
 
//         this.activity.push(`Account ID${this._id} created`);
//     }
 
//     public deposit(id: number, amount: number): void {
//         const client = this.clients.find(x => x.id === id);
 
//         if(!client) {
//             this.activity.push('Account does not exist');
//             return;
//         }
 
//         this._balance += amount;
//         client.balance += amount;
//         this.activity.push(`Deposited ${amount} to ID${client.id}`);
//     }
 
//     public setInterest(interest: number) {
//         this._interestRate = interest;
//     }
 
//     public getInterest(id: number, years: number) {
//         const client = this.clients.find(x => x.id === id);
 
//         if(!client) {
//             this.activity.push('Account does not exist');
//             return;
//         }
 
//         this.activity.push((client.balance * this._interestRate * years).toFixed(2));
//     }
 
//     public end() {
//         this.activity.forEach(x => console.log(x));
//         this.activity = [];
//     }
// }
 
// const client = new BankAccount();
 
// client.create();
// client.create();
// client.deposit(1, 20);
// client.deposit(3, 20);
// client.deposit(2, 10);
// client.setInterest(1.5);
// client.getInterest(1, 1);
// client.getInterest(2, 1);
// client.getInterest(3, 1);
// client.end();
 
// client.create();
// client.deposit(1, 20);
// client.getInterest(1, 10);
// client.end();

//  01 - Car Info
// class Car {
//     brand: string;
//     model: string;
//     horsePower: number;

//     constructor(){
//         this.brand = '';
//         this.model = '';
//         this.horsePower = 0;
//     }

//     get carBrand(): string{
//         return this.brand;
//     }
//     set carBrand(newBrand: string){
//      this.brand = newBrand;
//     }

//     get carModel(): string{
//         return this.model;
//     }

//     set carModel(newModel){
//         this.model = newModel;
//     }

//     get carHorsePower(): number{
//         return this.horsePower;
//     }

//     set carHorsePower(newPower){
//         this.horsePower = newPower;
//     }
// }

// const car = new Car();

// function carInfo(input: string): void{
//     const [brand, model, horsePower] = input.split(' ');
//    const horsePowerToNumber = Number(horsePower);
//    car.brand = brand;
//    car.model = model;
//    car.horsePower = horsePowerToNumber;
//    console.log(`The car is: ${car.brand} ${car.model} - ${car.horsePower}`);  
// }

// carInfo('Chevrolet Impala 390');

//  02 - Opinion Poll
// class Person {
//     name: string;
//     age: number;
    
//     constructor() {
//        this.name = '';
//        this.age = 0; 
//     }
//     get personName(): string{
//         return this.name;
//     }

//     set personName(newName: string){
//         this.name = newName;
//     }

//     get personAge(): number{
//         return this.age;
//     }

//     set personAge(newAge: number){
//         this.age = newAge;
//     }
// }
// const person = new Person();

// function printPersonInfo(line: string): void {
//     const [name, age] = line.split(' ');
//     person.name = name;
//     person.age = Number(age);
//     console.log(`${person.name} is ${person.age} years old.`);
// }

// printPersonInfo('Peter 12');

//  03 - Bank Account
type Client = {
    id: number;
    balance: number;
}
class BankAccount{
    private id: number;
    private balance: number;
    private interestRate: number;

   private clients: Client[] = [];
   private activities: string[] = [];

    constructor() {
     this.id = 0;
     this.balance = 0;
     this.interestRate = 0.2;  
    }

    create(): void{
        this.id += 1;
        this.clients.push({id: this.id, balance: 0});
        this.activities.push(`Account ID${this.id} created`);
    }

 setInterestRate(interest: number){
 this.interestRate = interest;
 }

 getInterest(id: number, years: number){
    const client = this.clients.find((x)=> x.id === id);
    if(!client){
        this.activities.push('Account does not exist');
        return;
    }
    this.activities.push((client.balance * this.interestRate * years).toFixed(2)); 
 }

 deposit(id: number, amount: number){
    const client = this.clients.find((x)=> x.id === id);
    if(!client){
        this.activities.push('Account does not exist');
        return;
    }
    this.balance += amount;
    client.balance += amount;
    this.activities.push(`Deposited ${amount} to ID${client.id}`);
 }

 end(){
    this.activities.forEach((x)=> console.log(x));
    this.activities = [];
 }
}
const client = new BankAccount();
client.create();
client.create();
client.deposit(1, 20);
client.deposit(3, 20);
client.deposit(2, 10);
client.setInterestRate(1.5);
client.getInterest(1, 1);
client.getInterest(2, 1);
client.getInterest(3, 1);
client.end();






