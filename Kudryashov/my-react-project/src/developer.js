import './developer.css';

export class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  displayInfo() {
    return `Project developer ${this.firstName} ${this.lastName}`;
  }
}