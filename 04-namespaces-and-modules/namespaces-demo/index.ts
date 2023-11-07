namespace PersonUtils {
    interface PersonDetails{
        name: string;
    }
  export class Person implements PersonDetails{
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    getName(): string {
      return this.name;
    }
  }
}

// const peshoPerson = new PersonUtils.Person('Pesho');

class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
}

const p1 = new Person('Ivan');
const p2 = new PersonUtils.Person('Stoyan');