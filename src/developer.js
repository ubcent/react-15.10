import './developer.css';

export class Developer {
    constructor(devName) {
        this.devName = devName;
    }

    render() {
        var div = document.createElement('div');
        div.className = "developer_wrap";
        div.innerHTML = `<span>Develover:</span> ${this.devName}`;
        document.body.appendChild(div);

        div.onclick = function (e) {
            alert(new Date());
        }
    }
}