"use strict";
// interface client {
//     id: number,
//     balance: number,
// }
class Car {
    constructor() {
        this.brand = '';
        this.model = '';
        this.horsePower = 0;
    }
    get carBrand() {
        return this.brand;
    }
    set carBrand(newBrand) {
        this.brand = newBrand;
    }
    get carModel() {
        return this.model;
    }
    set carModel(newModel) {
        this.model = newModel;
    }
    get carHorsePower() {
        return this.horsePower;
    }
    set carHorsePower(newPower) {
        this.horsePower = newPower;
    }
}
const car = new Car();
function carInfo(input) {
    const [brand, model, horsePower] = input.split(' ');
    const horsePowerToNumber = Number(horsePower);
    car.brand = brand;
    car.model = model;
    car.horsePower = horsePowerToNumber;
    console.log(`The car is: ${car.brand} ${car.model} - ${car.horsePower}`);
}
carInfo('Chevrolet Impala 390');
//# sourceMappingURL=app.js.map