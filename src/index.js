'use strict';

import Developer from './components/Developer';
import TimeButton from './components/TimeButton';

let developer = new Developer('Khamyanov', 'Aleksandr', 'Andreevich');

document.body.appendChild(developer.outputFullName());

let buttonTime = new TimeButton('current time');

document.body.appendChild(buttonTime.build());