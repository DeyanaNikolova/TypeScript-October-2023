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

const generateAndAttachId = <T>(obj: T) => {
    const objId = Math.random();
return {...obj, id: 1};
}

type PersonObjData = {
    name: String;
    age: Number;
    city: String;
}

const person: PersonObjData = {name: 'Mitko', age: 22, city: 'Lovech'};
const personWithId = generateAndAttachId<PersonObjData>(person);
console.log(personWithId);

type AnimalObjData = {
    legsCVount: number;
    furColor: string;
    name: string;
}

const animal: AnimalObjData = {
    legsCVount: 4,
    furColor: 'brown',
    name: 'Mishi',
}

const animalWithId = generateAndAttachId(animal);
console.log(animalWithId);

