import './dev.scss';

export class Developer {
  constructor(developer) {
    const {firstName, lastName, patronymic, position } = developer;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.position = position;
  }

  displayInfo() {
    const container = document.querySelector('.display_dev');
    const text = `${this.position}: ${this.firstName} ${this.patronymic} ${this.lastName}`;
    container.textContent = text;
  }
}



