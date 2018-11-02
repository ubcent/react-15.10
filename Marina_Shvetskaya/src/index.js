import { Developer } from './dev';
import { Clock } from './date';

const developer = {
  firstName: 'Vasja',
  lastName: 'Pupkin',
  patronymic: 'J.',
  position: 'developer',
};

const vasja = new Developer(developer);
vasja.displayInfo();

const clock = new Clock();

document.querySelector('#timeButton').addEventListener('click', () => clock.makeClock());
