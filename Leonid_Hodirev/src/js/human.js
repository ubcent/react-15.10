import '../css/human.css'

export default class Human {
    constructor(surname, name, patronymic) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }

    sayHi() {
        return `Hi, ${this.surname} ${this.name} ${this.patronymic}`;
    }
}