export class Developer {
    constructor(name, outputId){
        this.name = name;
        this.outputId = outputId;
    }
    showName (){
        document.getElementById(`${this.outputId}`).innerText = `Меня зовут ${this.name}`;
    }
}