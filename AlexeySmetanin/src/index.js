import { Human } from './user';
import { Developer } from './developer';//2-й урок 2 задача

const h = new Human('Dmitry', 'Bondarchuk');
alert(h.sayHi());

console.log('Hello word');

const developer = new Developer('Alexey Smetanin');

document.getElementById('box').appendChild(developer.render());//2-й урок 3 задача 
