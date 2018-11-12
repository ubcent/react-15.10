import './style.css';

export class devFIO {
    constructor(firstname, lastname, patronymic){
        this.firstname = firstname;
        this.lastname = lastname;
        this.patronymic = patronymic;
    }
    outputFIO(){
        alert(`ФИО разработчика: ${this.firstname} ${this.lastname} ${this.patronymic}`)
    }
}