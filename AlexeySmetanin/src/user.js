import './user.css';

export class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi() {
        return `Hi, ${this.firstNam} ${this.lastName}`;
    }
}