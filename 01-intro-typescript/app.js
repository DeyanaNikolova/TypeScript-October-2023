var Person = /** @class */ (function () {
    function Person(fName) {
        this.firstName = fName;
    }
    Person.prototype.greeting = function () {
        return "Hello ".concat(this.firstName, "!");
    };
    return Person;
}());
