export class Developer {
    constructor(developerName) {
        this.developer = developerName;        
    }
    render() {
        var dev = document.createElement('div');
        dev.textContent = this.developer;
        dev.className = 'developer'; //2-я лекция 4 задача
        return dev;
    }
}