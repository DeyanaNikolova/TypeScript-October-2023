import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[] = [];
  getCount: number;

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
    this.getCount = 0;
  }

  addDrink(drink: Drink): void{
    if (this.buttonCapacity > this.drinks.length) {
      this.drinks.push(drink);   
    }
     this.getCount++;
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((d) => d.name === name);

    if (index !== -1) {
      this.drinks.splice(index, 1);
      return true;
    }
    return false;
  }

  getLongest(): string {
    const longestDrink = [...this.drinks].sort(
      (a, b) => b.volume - a.volume
    )[0];
    return longestDrink.toString();
  }

  getCheapest(): string {
    const lowestPrice = [...this.drinks].sort((a, b) => a.price - b.price)[0];
    return lowestPrice.toString();
  }

  buyDrink(name: string): string | undefined {
    const drink = this.drinks.find((d) => d.name === name)?.toString();
    return drink;
  }

  report(): string {
    const result = [`Drinks available:`];
    this.drinks.forEach((d) => {
      result.push(d.toString());
    });
    return result.join("\n");
  }
}
