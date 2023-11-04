// Contract
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  tellDetais: () => void;
}

const user: UserDetails = {
  firstName: "Pesho",
  lastName: "Ivanov",
  email: "pesho@gmail.com",
  tellDetais: function () {
    console.log(`User Details: ${this.firstName} ${this.lastName} with email: ${this.email}`);
    
  },
};

user.tellDetais();