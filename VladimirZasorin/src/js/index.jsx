import React, { Component } from 'react';
import ReactDom from 'react-dom';
import App from './components';
import './components/ChatPage/ChatColomn/Message/Message.css';
import './components/ChatPage/UsersOnlineColomn/UserlistElement/UserlistElement.css';
import './style.css';

window.addEventListener('load', () => {
    ReactDom.render(<App />, document.getElementById('root'));

    let socket = io('http://localhost:3000');

    if (window.location.search.length < 3) {
        socket.emit('newroom', (wls) => {
            window.location.href = wls;
        });
    }

    const message = document.querySelector('#mes');
    const mesForm = document.querySelector('.messform');
    const status = document.querySelector('#status');
    const userlist = document.querySelector('.userlist');
    const loginForm = document.querySelector('.enter');
    const name = document.querySelector('#name');
    const chatroom = document.querySelector('.chatroom');

    socket.on('get message', (data) => {
        let divname;
        let name;
        if (socket.id === data.id) {
            divname = 'message myMes';
            name = 'Me';
        } else {
            divname = 'message otherMes';
            name = data.username;
        }
        const contain = new Element('div', divname).render();
        const elName = new Element('h5', 'name', name).render();
        const elTime = new Element('span', 'time', data.time).render();
        const elMes = new Element('p', 'text', data.message).render();

        contain.appendChild(elName);
        contain.appendChild(elTime);
        contain.appendChild(elMes);
        status.appendChild(contain);

        contain.scrollIntoView();
    });
    socket.on('user list', (users) => {
        userlist.innerHTML = '';
        users.map((elem) => {
            const li = new Element('li', 'list-element').render();
            const p = new Element('p', 'name-elem', elem).render();
            li.appendChild(p);
            userlist.appendChild(li);
        });
    });
    socket.on('disconnect', () => {
        loginForm.style.display = 'flex';
        chatroom.style.display = 'none';
    });

    mesForm.addEventListener('submit', (e) => {
        newMessege(e);
        return false;
    });
    message.addEventListener('keydown', (e) => {
        if (e.keyCode === 13 && e.ctrlKey) {
            newMessege(e);
        }
        return false;
    });
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = name.value;
        name.value = '';
        if (username !== '') {
            socket.emit('join', {
                namespace: window.location.search,
                username
            });
            loginForm.style.display = 'none';
            chatroom.style.display = 'flex';
        }
        return false;
    });

    function newMessege(e) {
        e.preventDefault();
        if (message.value == '') return;
        socket.emit('new message', message.value);
        message.value = '';
    }
});

class Element {
    /**
     * @param {string} tagN 
     * @param {string} classN 
     * @param {string} textData
     * @param {object} el
     */
    constructor(tagN = 'div', classN = undefined, textData = undefined) {
        this.tag = tagN;
        this.class = classN;
        this.text = textData;
        this.el = document.createElement(this.tag);
    }
    /**
     * @returns {object} DOM-элемент
     */
    render() {
        if (this.class !== undefined) {
            this.el.className = this.class;
        }
        if (this.text !== undefined) {
            this.el.textContent = this.text;
        }
        return this.el;
    }
}