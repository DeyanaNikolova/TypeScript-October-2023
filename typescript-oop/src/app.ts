// Procedural programming way

// const baseSalary = 30000;
// const overtime = 10;

// function getWage(baseSalary: number, overtime: number): number {
//     return baseSalary + overtime * 1.5;
// }
// console.log(getWage(baseSalary, overtime));

// OOP way
const employee = {
    baseSalary: 30000,
    overtome: 10,
    getWage: function () {
        return this.baseSalary + this.overtome * 1.5;
    }
};
console.log(employee.getWage());
