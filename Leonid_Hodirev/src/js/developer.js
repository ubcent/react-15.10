import Human from "./human";


export default class Developer extends Human {
    constructor(surname, name, patronymic) {
        super(surname, name, patronymic);
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }

    getDeveloper() {
        return `Developer: ${this.surname} ${this.name} ${this.patronymic}`;
    }
}