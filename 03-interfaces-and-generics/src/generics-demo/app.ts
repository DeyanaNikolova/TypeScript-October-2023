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

// Tuples
// const obj = { a: 1, b: 2, c: 3};
// console.log(Object.entries(obj));

// const makeTuples = <T, V>(a: T, b: V): (T | V)[] => {
//     return [a, b];
// }

// console.log(makeTuples('a', true));
// console.log(makeTuples(1, 'asdasd'));

type GenericConstructor<T , V> = {
    (arg1: T, arg2: V): [T, V];
}
 const generateFn: GenericConstructor<string, string> = <T, V>(arg1: T, arg2: V)=> {
return [arg1, arg2];
 }

 const output = generateFn('hello', 'world');
 console.log(output);
 



