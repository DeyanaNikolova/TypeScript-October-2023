"use strict";
// interface client {
//     id: number,
//     balance: number,
// }
class BankAccount {
    constructor() {
        this.clients = [];
        this.activities = [];
        this.id = 0;
        this.balance = 0;
        this.interestRate = 0.2;
    }
    create() {
        this.id += 1;
        this.clients.push({ id: this.id, balance: 0 });
        this.activities.push(`Account ID${this.id} created`);
    }
    setInterestRate(interest) {
        this.interestRate = interest;
    }
    getInterest(id, years) {
        const client = this.clients.find((x) => x.id === id);
        if (!client) {
            this.activities.push('Account does not exist');
            return;
        }
        this.activities.push((client.balance * this.interestRate * years).toFixed(2));
    }
    deposit(id, amount) {
        const client = this.clients.find((x) => x.id === id);
        if (!client) {
            this.activities.push('Account does not exist');
            return;
        }
        this.balance += amount;
        client.balance += amount;
        this.activities.push(`Deposited ${amount} to ID${client.id}`);
    }
    end() {
        this.activities.forEach((x) => console.log(x));
        this.activities = [];
    }
}
const client = new BankAccount();
client.create();
client.create();
client.deposit(1, 20);
client.deposit(3, 20);
client.deposit(2, 10);
client.setInterestRate(1.5);
client.getInterest(1, 1);
client.getInterest(2, 1);
client.getInterest(3, 1);
client.end();
//# sourceMappingURL=app.js.map