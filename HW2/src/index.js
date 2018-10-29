import Name from './name';


const name = new Name('Kirill', 'Lobanov');
let nameContainer = document.querySelector('.name');
let p = document.createElement('p');
p.textContent = name.sayName();
nameContainer.appendChild(p);


let $button = document.querySelector('.button');
$button.addEventListener('click', () =>  {
    let now = new Date();
    document.querySelector('.time').innerHTML = `${now}`;
});



