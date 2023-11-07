import { PersonDetails } from '../interfaces/Person';
import { capitalizeFirstLetter } from './string-utils';


export const transformNameToUppercase = (person: PersonDetails)=>{
   const { name } = person;
    return {
        ...person, 
        name: capitalizeFirstLetter(name),
    }
}