import { Developer } from './developer';
import './date.css';

const $dev = document.createElement('p');
$dev.innerText = new Developer('Andrey', 'Kudryashov').displayInfo();
$dev.className = 'dev';
document.body.appendChild($dev);

$dev.addEventListener('click', (event) => {
const $date = document.createElement('p');
$date.innerText = new Date();
$date.className = 'date';
document.body.appendChild($date);
});