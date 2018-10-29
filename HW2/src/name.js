export default class Name {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        return `Hi, my name ${this.lastName} ${this.firstName}`
    }
}