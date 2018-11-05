import './TimeButton.scss';

export default class Index {
  constructor(text) {
    this.text = text;
  }

  build() {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(this.text));
    button.classList.add('time-button');
    button.addEventListener('click', () => {
      this.clickToButton();
    });

    return button;
  }

  clickToButton() {
    const substrate = document.createElement('div');
    substrate.classList.add('substrate-time');

    const popupWindow = document.createElement('div');
    popupWindow.classList.add('time-popup-window-block');

    const time = document.createElement('div');
    time.classList.add('time-block');
    const now = new Date();
    time.appendChild(document.createTextNode(now));

    const close = document.createElement('div');
    close.classList.add('close-block');
    close.appendChild(document.createTextNode('close'));

    popupWindow.appendChild(time);
    popupWindow.appendChild(close);

    substrate.appendChild(popupWindow);

    close.addEventListener('click', () => {
      substrate.parentNode.removeChild(substrate);
    });

    document.body.appendChild(substrate);
  }
}