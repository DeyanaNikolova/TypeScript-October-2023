"use strict";
class BankAccount {
    constructor() {
        this._interestRate = 0.02;
        this.clients = [];
        this.activity = [];
        this._id = 0;
        this._balance = 0;
    }
    create() {
        this._id += 1;
        this.clients.push({
            id: this._id,
            balance: 0
        });
        this.activity.push(`Account ID${this._id} created`);
    }
    deposit(id, amount) {
        const client = this.clients.find(x => x.id === id);
        if (!client) {
            this.activity.push('Account does not exist');
            return;
        }
        this._balance += amount;
        client.balance += amount;
        this.activity.push(`Deposited ${amount} to ID${client.id}`);
    }
    setInterest(interest) {
        this._interestRate = interest;
    }
    getInterest(id, years) {
        const client = this.clients.find(x => x.id === id);
        if (!client) {
            this.activity.push('Account does not exist');
            return;
        }
        this.activity.push((client.balance * this._interestRate * years).toFixed(2));
    }
    end() {
        this.activity.forEach(x => console.log(x));
        this.activity = [];
    }
}
const client = new BankAccount();
// client.create();
// client.create();
// client.deposit(1, 20);
// client.deposit(3, 20);
// client.deposit(2, 10);
// client.setInterest(1.5);
// client.getInterest(1, 1);
// client.getInterest(2, 1);
// client.getInterest(3, 1);
// client.end();
client.create();
client.deposit(1, 20);
client.getInterest(1, 10);
client.end();
// Probem 1 function
function calculator(a, operator, b) {
    if (operator === '+') {
        console.log(a + b);
    }
    else if (operator === '-') {
        console.log(a - b);
    }
    else if (operator === '*') {
        console.log(a * b);
    }
    else {
        console.log(a / b);
    }
}
calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(7, '*', 5);
calculator(9, '/', 2);
//# sourceMappingURL=app.js.map