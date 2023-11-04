type Mammal = {
  legsCount: number;
  furColor: string;
};

type Animal = {
  eat: () => void;
};

type Dog1 = Mammal & Animal & { name: string };

function getMammal(): Dog1 {
  const dog: Dog1 = {
    name: 'Rexy',
    legsCount: 4,
    furColor: "white",
    eat: () => console.log("Dog is eating"),
  };

  return dog;
}

interface DogOwner {
    dogs: Dog1[];
}

type PersonTest = {
    dogOwner: DogOwner;
}


class Dog implements Mammal {
  legsCount: number;
  furColor: string;
  constructor() {
    this.legsCount = 4;
    this.furColor = "brown";
  }
}

const dog2 = new Dog();
