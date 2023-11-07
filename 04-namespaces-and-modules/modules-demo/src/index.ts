import { PersonDetails, PersonDetailsWithoutAge } from "./interfaces/Person";
import { transformNameToUppercase } from "./utils/person-util";

const person1: PersonDetails = { name: 'mitko', age: 23 };
const person2: PersonDetailsWithoutAge = {name: 'ivan'};

const personOneCapitalized = transformNameToUppercase(person1);
const personTwoCapitalized = transformNameToUppercase(person2);
console.log(person1);
console.log(personOneCapitalized);

