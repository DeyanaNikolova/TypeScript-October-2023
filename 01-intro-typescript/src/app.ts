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

console.log('enum', DaysOfWeek);
console.log(DaysOfWeek.Friday);


