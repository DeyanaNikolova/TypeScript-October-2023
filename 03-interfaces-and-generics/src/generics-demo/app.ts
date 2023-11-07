// Genrics

// const getTest = <T>(paramId: T): T => {
//   return paramId;
// };

// const id1 = <number>1;
// const id2 = getTest<string>("sfsgsd");
// const ids = getTest<number[]>([1, 2, 3]);

// type UserData<T> = {
//   name: string;
//   age: number;
//   address: string;
//   id: T;
// };
// const x = getTest<UserData<number>>({
//     name: "Ivan",
//     age: 23,
//     address: "Sofia, Bulgaria",
//     id:12
// });

// const y = getTest<UserData<string>>({
//     name: "Ivan",
//     age: 23,
//     address: "Sofia, Bulgaria",
//     id: 'asdasd'
// });

// Generic use case

// const generateAndAttachId = <T>(obj: T) => {
//     const objId = Math.random();
// return {...obj, id: 1};
// }

// type PersonObjData = {
//     name: String;
//     age: Number;
//     city: String;
// }

// const person: PersonObjData = {name: 'Mitko', age: 22, city: 'Lovech'};
// const personWithId = generateAndAttachId<PersonObjData>(person);
// console.log(personWithId);

// type AnimalObjData = {
//     legsCVount: number;
//     furColor: string;
//     name: string;
// }

// const animal: AnimalObjData = {
//     legsCVount: 4,
//     furColor: 'brown',
//     name: 'Mishi',
// }

// const animalWithId = generateAndAttachId(animal);
// console.log(animalWithId);

// interface DocumentObj<T> {
//   id: number;
//   name: string;
//   data: T;
// }

// const doc1: DocumentObj<{name: string}[]> = {
//   id: 1,
//   name: "flowers",
//   data: [{ name: "rosa" }, { name: "daffodil" }, { name: "orhid" }],
// };

// const doc2: DocumentObj<{name: string, age: number, address: string}> = {
//     id: 2,
//     name: 'persons',
//     data: {name: 'Pesho', age: 12, address: 'Bulgaria'},
// }

// const doc3: DocumentObj<number> = {
//     id: 3,
//     name: 'test',
//     data: 1,
// }

// Generic function

// function echo<T>(arg: T): T {
//     console.log(typeof arg);

//    return arg;
// }

// echo(1);
// echo('asdasd');
// echo(true);
// echo([1, 2, 3]);

// const takeLast = <T>(array: T[]): T =>{
//     return array[array.length - 1];
// }

// console.log(takeLast([1, 2, 3, 4]));
// console.log(takeLast(['a', 'b', 'c', 'd']));
// console.log(takeLast([true, false, false, true, true]));
// console.log(takeLast([{a: 1}, {a: 2},{a: 3}]));

//  Generic Tuples
// const obj = { a: 1, b: 2, c: 3};
// console.log(Object.entries(obj));

// const makeTuples = <T, V>(a: T, b: V): (T | V)[] => {
//     return [a, b];
// }

// console.log(makeTuples('a', true));
// console.log(makeTuples(1, 'asdasd'));

// Generic types
// type GenericConstructor<T , V> = {
//     (arg1: T, arg2: V): [T, V];
// }
//  const generateFn: GenericConstructor<string, string> = <T, V>(arg1: T, arg2: V)=> {
// return [arg1, arg2];
//  }

//  const output = generateFn('hello', 'world');
//  console.log(output);

// Generic class

// class Collection<T> {
//   data: T[];

//   constructor(...elemets: T[]) {
//     this.data = elemets;
//   }

//   addElement(el: T) {
//     this.data.push(el);
//   }

//   removeElement(el: T) {
//     const index = this.data.indexOf(el);
//     if (index > -1) {
//       this.data.splice(index, 1);
//     }
//   }
// }

// const numberCollection = new Collection(1, 2, 3, 4, 5);
// console.log(numberCollection.data);
// numberCollection.addElement(66);
// numberCollection.removeElement(3);
// console.log(numberCollection.data);

// const stringCollection = new Collection('a', 'b', 'c', 'd');
// console.log(stringCollection.data);
// stringCollection.addElement('e');
// stringCollection.removeElement('b');
// console.log(stringCollection.data);

// Class with two generic parameters
// class ParamsDada<F, S> {
// first: F;
// second: S;

// constructor(f: F, s: S){
//     this.first = f;
//     this.second = s;
// }

// getConcatArg(){
//     return `My first param ${this.first} and my second param is ${this.second}.`;
// }
// }

// const test1 = new ParamsDada(23, 'asdasd');
// test1.getConcatArg();
// console.log(test1);

// Generics extend

// const person = {
//   id: 12,
//   age: 33,
//   address: 'Sofia, Bulgaria',
//   firstName: 'Ivan',
//   lastName: 'Ivanov',
// }

// interface FullName {
//   firstName: String;
//   lastName: string;
//   id: number;
// }

// function fullName<T extends FullName>(obj: T) {
//  return `The full name of the user is: ${obj.firstName} ${obj.lastName}.`;
// }

// const obj = fullName(person);
// console.log(obj);

// Lab: exersise 3
class BankAccount {
  private static id: number;
  private balance: number = 0;
  private interestRate: number = 0.02;

  constructor() {
    BankAccount.id += 1;
  }

  public setInterestRate(interestRate: number) {
    this.interestRate = interestRate;
  }

  public getInterest(id: number, years: number): number {
    return this.interestRate;
  }

  public deposit(id: number, ammount: number) {
    this.balance += ammount;
  }
}

const bankAccount = new BankAccount();
bankAccount.deposit(5, 200);
