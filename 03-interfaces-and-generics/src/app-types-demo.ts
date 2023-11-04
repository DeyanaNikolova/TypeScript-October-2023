type Mammal = {
  legsCount: number;
  furColor: string;
};

type Animal = {
  eat: () => void;
};

type Dog1 = Mammal & Animal;

function getMammal(): Dog1 {
  const dog: Dog1 = {
    legsCount: 4,
    furColor: "white",
    eat: () => console.log("Dog is eating"),
  };

  return dog;
}

interface DogOwner {
    dogs: Dog1[];
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
