import { PersonDetails, PersonDetailsWithoutAge } from '../interfaces/Person';
import { capitalizeFirstLetter } from './string-utils';


export const transformNameToUppercase = (person: PersonDetails | PersonDetailsWithoutAge)=>{
   const { name } = person;
    return {
        ...person, 
        name: capitalizeFirstLetter(name),
    }
}