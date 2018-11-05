'use strict';

import './Developer.scss';

export default class Index {
  constructor(surname, name, patronymic) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
  }

  outputFullName () {
    const divFullName = document.createElement('div');

    divFullName.appendChild(document.createTextNode(
      this.surname + " " + this.name + " " + this.patronymic
    ));

    divFullName.classList.add('full-name-developer');

    return divFullName;
  }
}