// Contract
interface UserDetails {
  firstName: string;
  lastName: string;
  email?: string;
  tellDetais?: () => void;
}

interface Human {
    legsCount: number;
    skinColor: string;
   
  }

  // Can extebds other interfaces
  interface PersonDetails extends UserDetails, Human {
    fullName: string;
  }

// Can be implemented by a class
class Person implements PersonDetails {
    firstName: string;
    lastName: string;
    legsCount: number;
    skinColor: string;
    fullName: string;
  
    constructor(fName: string, lName: string, legsCount: number, skinColor: string) {
      this.firstName = fName;
      this.lastName = lName;
      this.legsCount = legsCount;
      this.skinColor = skinColor;
      
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  }


//   Can be used as a type of a variable
const user: UserDetails = {
  firstName: "Pesho",
  lastName: "Ivanov",
//   email: "pesho@gmail.com",
//   tellDetais: function () {
//     console.log(`User Details: ${this.firstName} ${this.lastName} with email: ${this.email}`);
//   },
};

// user.tellDetais();


// Can be used as a return type
function getUsers(): UserDetails[] {
    return [
        {
        firstName: "Pesho",
        lastName: "Ivanov",
      },
      {
        firstName: "Maria",
        lastName: "Petrova",
      },
      {
        firstName: "Mitko",
        lastName: "Mitkov",
      },
    ]
}

const users = getUsers();
