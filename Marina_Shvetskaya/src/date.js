import './date.scss';

export class Clock {
  constructor() {}

  makeClock() {
    const container = document.querySelector('.display_date');

    const date = new Date();
    const view = new Intl.DateTimeFormat('ru');
    const myDate = view.format(date);
    container.textContent = myDate;
  }
}



