// Type String
let greetingMessage: string = "Hello";
greetingMessage = "Ok";
greetingMessage = `Ok (updated) ${123}`;
// console.log('string', greetingMessage);


// Type Number
let numberOfHouses: number = 4;
numberOfHouses = 10103945495;
numberOfHouses = 7e3;
// console.log('number', numberOfHouses);


//  Type Boolean
let isDog: boolean = true;
isDog = false;
isDog = 5 > 2;
isDog = [1, 2, 3, 4].includes(100);
isDog = [1, 2, 3, 4].some(e => e === 1);
// console.log('boolean', isDog);

//  Type Symbol
let uniqueSymbol: Symbol = Symbol('myUniqueSymbol');
let anotherUnoqueSymbol: Symbol = Symbol('myUniqueSymbol');
const areEqual = uniqueSymbol === anotherUnoqueSymbol;

// console.log('symbol', uniqueSymbol);
// console.log('areEqual', areEqual);


// Type null and undefined
let person: undefined;
// console.log(typeof person);

let dogs: null = null;
// console.log('null: ', dogs);

//  Type Array
const arrOfNumbers: number[] = [1, 2, 3, 4];
// console.log('array of numbers', arrOfNumbers);

const arrOfStrings: string[] = ['Pesho', 'Gosho', 'Stamat'];
// console.log('array of strings', arrOfStrings);

const arrOfBools: boolean[] = [true, false, true];
// console.log('array of booleans', arrOfBools);


// Array of objects
type Person = {
    name: string;
    age: number;
};

const arrOfObj: Person[] = [{name: 'Pesho', age: 25}, {name: 'Ivan', age: 15}];
// console.log('array of objects', arrOfObj);

// Tuples
const numberAndStringTuples: [number, string] = [18, 'Pesho'];
//console.log('array of tuples', numberAndStringTuples);

// Enum
enum DaysOfWeek {
    Monday, 
    Tuesday, 
    Wednesday, 
    Thusrday, 
    Friday, 
    Saturday, 
    Sunday
};

// console.log('enum', DaysOfWeek);
// console.log(DaysOfWeek.Friday);

enum DaysOfWeek2 {
    Monday = 200, 
    Tuesday = 'Dog', 
    Wednesday = 1200, 
};

 // console.log(DaysOfWeek2.Tuesday);


 // Any
 let a: any = 5;
 a = 'Poker';
 a = { name: 'Ivan'};
 a = [{name: 'Ivan'}, {name: 'Pesho'}];
 a = null;
 // console.log('any', a);


// Unknown
 let b: unknown = 5;
 b = 'Poker';
 b = { name: 'Ivan'};
 b = [{name: 'Ivan'}, {name: 'Pesho'}];
 b = null;
 // console.log('unknown', b);

 // Function type void
 function greetings(name: string): void {
   // console.log(`Hello ${name}!`);   
 }
 greetings('Ivan');


//  Optopnal data types   ?
 function printPersonDetails(name:string, age?: number) {
   if(typeof age !== 'undefined'){
    return `Hello ${name}, you are ${age} y/o.`;
   } 
    return `Hello ${name}!`;
 }
//  console.log(printPersonDetails('Mitko'));
//  console.log(printPersonDetails('Maria', 35));

// Union types
let personsArray: string[] | null = null;

function fetchPersons() {
        personsArray = ['Mitko', 'Pesho', 'Kiro'];  
}

// if persons null -> loader == true
// console.log('before', personsArray);
fetchPersons();
// if persons [...] -> loader == false
// console.log('after', personsArray);

// Intersection types
type Dog = {name: string };
type Dog2 = { fullName: string};

const obj: Dog & Dog2 = {name: 'Boby', fullName: 'Boby Bobev'};
// console.log('intersection', obj);


// Literal types
let statusMsg: 'success' | 'error' = 'success';
console.log('literal: ', statusMsg);

 