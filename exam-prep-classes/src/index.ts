interface Car {
  model: string;
  horsePower: number;
  price: number;
  mileage: number;
}

class CarDealership {
  name: string;
  availableCars: Car[] = [];
  soldCars: Car[] = [];
  totalIncome: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  addCar(
    model: string,
    horsePower: number,
    price: number,
    mileage: number
  ): string {
    if (model == "" || horsePower < 0 || price < 0 || mileage < 0) {
      throw new Error("Invalid input!");
    }
    this.availableCars.push({ model, horsePower, price, mileage });
    return `New car added: ${model} - ${horsePower} HP - ${mileage.toFixed(
      2
    )} km - ${price.toFixed(2)}$`;
  }

  sellCar(model: string, desiredMileage: number): string {
    const car = this.availableCars.find((c) => c.model === model);
    if (!car) {
      throw new Error(`${model} was not found!`);
    }

    const differnce = Math.abs(car.mileage - desiredMileage);

    if (differnce < 40000) {
      car.price = car.price * 0.95;
    } else if (differnce > 40000) {
      car.price = car.price * 0.9;
    }

    this.soldCars.push(car);
    this.totalIncome += car.price;

    const index = this.availableCars.indexOf(car);
    this.availableCars.splice(index, 1);

    return `${car.model} was sold for ${car.price.toFixed(2)}$`;
  }

  currentCar(): string {
    if (this.availableCars.length === 0) {
      return "There are no available cars.";
    }

    const result: string[] = [`-Available cars:`];

    this.availableCars.forEach((c) => {
      result.push(
        `---${c.model} - ${c.horsePower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
      );
    });
    return result.join("\n");
  }

  salesReport(criteria: string): string {
    if (criteria !== "horsepower" && criteria !== "model") {
      throw new Error("Invalid criteria!");
    }

    const result: string[] = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
    ];
    result.push(`-${this.soldCars.length} cars sold:`);

    if (criteria == "horsepower") {
      this.soldCars
        .sort((a, b) => b.horsePower - a.horsePower)
        .forEach((c) => {
          result.push(
            `---${c.model} - ${c.horsePower} HP - ${c.price.toFixed(2)}$`
          );
        });
    }
    return result.join("\n");
  }
}

const dealership = new CarDealership("SoftAuto");
dealership.addCar("Toyota Corolla", 100, 3500, 190000);
dealership.addCar("Mercedes C63", 300, 29000, 187000);
dealership.addCar("Audi A3", 120, 4900, 240000);
dealership.sellCar("Toyota Corolla", 230000);
dealership.sellCar("Mercedes C63", 110000);
console.log(dealership.salesReport("horsepower"));
