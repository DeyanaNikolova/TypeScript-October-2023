let greetingMessage: string = "Hello";
greetingMessage = "Ok";
greetingMessage = `Ok (updated) ${123}`;
// console.log('string', greetingMessage);

let numberOfHouses: number = 4;
numberOfHouses = 10103945495;
numberOfHouses = 7e3;
// console.log('number', numberOfHouses);

let isDog: boolean = true;
isDog = false;
isDog = 5 > 2;
isDog = [1, 2, 3, 4].includes(100);
isDog = [1, 2, 3, 4].some(e => e === 1);
console.log('boolean', isDog);


let uniqueSymbol: Symbol = Symbol('myUniqueSymbol');
let anotherUnoqueSymbol: Symbol = Symbol('myUniqueSymbol');
const areEqual = uniqueSymbol === anotherUnoqueSymbol;

console.log('symbol', uniqueSymbol);
console.log(areEqual);



